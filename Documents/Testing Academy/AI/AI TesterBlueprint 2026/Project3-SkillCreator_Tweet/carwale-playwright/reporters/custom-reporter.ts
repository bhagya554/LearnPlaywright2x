import {
    Reporter,
    FullConfig,
    Suite,
    TestCase,
    TestResult,
    FullResult
} from '@playwright/test/reporter';
import * as fs from 'fs';
import * as path from 'path';

interface TestSummary {
    projectName: string;
    total: number;
    passed: number;
    failed: number;
    skipped: number;
    flaky: number;
    duration: number;
    startTime: string;
    endTime: string;
    tests: TestDetail[];
}

interface TestDetail {
    title: string;
    fullTitle: string;
    status: string;
    duration: number;
    error?: string;
    retries: number;
    browser?: string;
}

/**
 * Custom Reporter for CarWale Playwright Framework
 * Generates beautiful console output and JSON reports
 */
class CarWaleReporter implements Reporter {
    private summary: TestSummary = {
        projectName: 'CarWale Automation',
        total: 0,
        passed: 0,
        failed: 0,
        skipped: 0,
        flaky: 0,
        duration: 0,
        startTime: '',
        endTime: '',
        tests: [],
    };

    onBegin(config: FullConfig, suite: Suite): void {
        this.summary.startTime = new Date().toISOString();

        console.log('\n');
        console.log('╔══════════════════════════════════════════════════════════════╗');
        console.log('║                                                              ║');
        console.log('║   🚗  CARWALE PLAYWRIGHT TEST AUTOMATION                     ║');
        console.log('║                                                              ║');
        console.log('╠══════════════════════════════════════════════════════════════╣');
        console.log('║                                                              ║');
        console.log(`║   📁 Test Directory: ${config.testDir?.padEnd(38)}║`);
        console.log(`║   🌐 Base URL: ${(config.projects[0]?.use?.baseURL || 'N/A').toString().padEnd(44)}║`);
        console.log(`║   👥 Workers: ${String(config.workers).padEnd(45)}║`);
        console.log(`║   🔄 Retries: ${String(config.projects[0]?.retries || 0).padEnd(45)}║`);
        console.log('║                                                              ║');
        console.log('╚══════════════════════════════════════════════════════════════╝');
        console.log('\n');
        console.log('─────────────────────────────────────────────────────────────────');
        console.log('                        TEST EXECUTION');
        console.log('─────────────────────────────────────────────────────────────────\n');
    }

    onTestBegin(test: TestCase): void {
        const projectName = test.parent?.project()?.name || 'default';
        console.log(`🧪 [${projectName}] Running: ${test.title}`);
    }

    onTestEnd(test: TestCase, result: TestResult): void {
        const duration = (result.duration / 1000).toFixed(2);
        const statusEmoji = this.getStatusEmoji(result.status);
        const projectName = test.parent?.project()?.name || 'default';

        console.log(`${statusEmoji} [${projectName}] ${test.title} (${duration}s)`);

        this.summary.total++;
        this.summary.duration += result.duration;

        const testDetail: TestDetail = {
            title: test.title,
            fullTitle: test.titlePath().join(' > '),
            status: result.status,
            duration: result.duration,
            retries: result.retry,
            browser: projectName,
        };

        switch (result.status) {
            case 'passed':
                this.summary.passed++;
                break;
            case 'failed':
            case 'timedOut':
                this.summary.failed++;
                if (result.error) {
                    testDetail.error = result.error.message;
                    console.log(`   ❌ Error: ${result.error.message?.split('\n')[0]}`);
                }
                break;
            case 'skipped':
                this.summary.skipped++;
                break;
        }

        // Check for flaky test
        if (result.status === 'passed' && result.retry > 0) {
            this.summary.flaky++;
        }

        this.summary.tests.push(testDetail);
    }

    onEnd(result: FullResult): void {
        this.summary.endTime = new Date().toISOString();
        const totalDuration = (this.summary.duration / 1000).toFixed(2);
        const passRate = this.summary.total > 0
            ? ((this.summary.passed / this.summary.total) * 100).toFixed(1)
            : '0';

        console.log('\n');
        console.log('╔══════════════════════════════════════════════════════════════╗');
        console.log('║                                                              ║');
        console.log('║                    📊 TEST SUMMARY                           ║');
        console.log('║                                                              ║');
        console.log('╠══════════════════════════════════════════════════════════════╣');
        console.log('║                                                              ║');
        console.log(`║   ✅ Passed:    ${String(this.summary.passed).padEnd(44)}║`);
        console.log(`║   ❌ Failed:    ${String(this.summary.failed).padEnd(44)}║`);
        console.log(`║   ⏭️  Skipped:   ${String(this.summary.skipped).padEnd(44)}║`);
        console.log(`║   🔄 Flaky:     ${String(this.summary.flaky).padEnd(44)}║`);
        console.log('║                                                              ║');
        console.log('╠══════════════════════════════════════════════════════════════╣');
        console.log('║                                                              ║');
        console.log(`║   📝 Total:     ${String(this.summary.total).padEnd(44)}║`);
        console.log(`║   📈 Pass Rate: ${(passRate + '%').padEnd(44)}║`);
        console.log(`║   ⏱️  Duration:  ${(totalDuration + 's').padEnd(44)}║`);
        console.log(`║   🏁 Status:    ${result.status.toUpperCase().padEnd(44)}║`);
        console.log('║                                                              ║');
        console.log('╚══════════════════════════════════════════════════════════════╝');
        console.log('\n');

        // Print failed tests if any
        if (this.summary.failed > 0) {
            console.log('─────────────────────────────────────────────────────────────────');
            console.log('                       FAILED TESTS');
            console.log('─────────────────────────────────────────────────────────────────\n');

            this.summary.tests
                .filter(t => t.status === 'failed' || t.status === 'timedOut')
                .forEach((t, i) => {
                    console.log(`${i + 1}. ${t.fullTitle}`);
                    if (t.error) {
                        console.log(`   Error: ${t.error}`);
                    }
                    console.log('');
                });
        }

        // Save JSON report
        this.saveReport();
    }

    private getStatusEmoji(status: string): string {
        switch (status) {
            case 'passed': return '✅';
            case 'failed': return '❌';
            case 'timedOut': return '⏰';
            case 'skipped': return '⏭️';
            case 'interrupted': return '🛑';
            default: return '❓';
        }
    }

    private saveReport(): void {
        const reportDir = 'reports';

        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const reportPath = path.join(reportDir, `carwale-report-${timestamp}.json`);
        const latestPath = path.join(reportDir, 'latest-report.json');

        fs.writeFileSync(reportPath, JSON.stringify(this.summary, null, 2));
        fs.writeFileSync(latestPath, JSON.stringify(this.summary, null, 2));

        console.log(`📄 Report saved: ${reportPath}`);
        console.log(`📄 Latest report: ${latestPath}\n`);
    }
}

export default CarWaleReporter;
