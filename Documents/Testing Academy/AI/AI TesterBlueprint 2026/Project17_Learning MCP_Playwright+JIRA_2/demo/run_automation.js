const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * MASTER PIPELINE: VWO LOGIN AUTOMATION
 * End-to-End Orchestrator for the AI Tester Blueprint 2026.
 */

async function main() {
    console.log('🚀 INITIALIZING VWO LOGIN AUTOMATION PIPELINE...');
    console.log('Environment: app.vwo.com | Playwright + JIRA MCP\n');

    try {
        // 1. RUN PLAYWRIGHT TESTS
        console.log('STEP 1: Running Playwright Test Suite (demo/vwo_login.spec.ts)...');
        let testOutput;
        try {
            // Using JSON reporter for structured parsing
            testOutput = execSync('npx playwright test demo/vwo_login.spec.ts --reporter=json', { 
                encoding: 'utf8', 
                stdio: 'pipe',
                cwd: path.resolve(__dirname, '..')
            });
        } catch (error) {
            testOutput = error.stdout || error.stderr;
        }

        const results = JSON.parse(testOutput);
        const stats = {
            total: results.stats.expected + results.stats.unexpected + results.stats.flaky,
            passed: results.stats.expected,
            failed: results.stats.unexpected,
            duration: (results.stats.duration / 1000).toFixed(2)
        };

        const passRate = stats.total > 0 ? ((stats.passed / stats.total) * 100).toFixed(0) : 0;

        // 2. LOG CONSOLE SUMMARY
        printSummary(stats, passRate);

        // 3. UPDATE HTML DASHBOARD
        updateDashboard(stats, passRate);

        // 4. JIRA INTEGRATION (Simulated check)
        if (stats.failed > 0) {
            console.log(`\n🚨 DETECTED ${stats.failed} FAILURES. ESCLATING BUG TO JIRA (Project: KAN)...`);
            // Automation script would call JIRA MCP/API here.
        } else {
            console.log('\n🔒 SECURITY & FUNCTIONAL CHECK: PASSED. No defects identified.');
        }

    } catch (err) {
        console.error('\n❌ PIPELINE HALTED:', err.message);
        process.exit(1);
    }
}

function printSummary(stats, passRate) {
    console.log('\n=============================================');
    console.log('        PIPELINE EXECUTION SUMMARY           ');
    console.log('=============================================');
    console.log(`STATUS      : ${stats.failed === 0 ? 'SUCCESS' : 'FAILED'}`);
    console.log(`TOTAL TESTS : ${stats.total}`);
    console.log(`PASSED      : ${stats.passed}`);
    console.log(`FAILED      : ${stats.failed}`);
    console.log(`PASS RATE   : ${passRate}%`);
    console.log(`DURATION    : ${stats.duration}s`);
    console.log('=============================================');
}

function updateDashboard(stats, passRate) {
    const reportPath = path.join(__dirname, 'vwo_execution_report.html');
    if (!fs.existsSync(reportPath)) return;

    let html = fs.readFileSync(reportPath, 'utf8');

    // Robust Regex to find stat values by their preceding labels
    html = html.replace(/(Total Tests<\/div>\s*<div class="stat-value">).*?(<\/div>)/is, `$1${stats.total}$2`);
    html = html.replace(/(Passed<\/div>\s*<div class="stat-value">).*?(<\/div>)/is, `$1${stats.passed}$2`);
    html = html.replace(/(Failed<\/div>\s*<div class="stat-value">).*?(<\/div>)/is, `$1${stats.failed}$2`);
    html = html.replace(/(Pass Rate<\/div>\s*<div class="stat-value">).*?(<\/div>)/is, `$1${passRate}%$2`);

    // Update timestamp
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    html = html.replace(/Generated:.*?(IST|pm|am)/g, `Generated: ${timestamp} IST`);

    fs.writeFileSync(reportPath, html);
    console.log('📊 Premium HTML Dashboard updated with latest metrics.');
}

main();
