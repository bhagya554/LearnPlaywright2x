// CallBack Hell - 20+ nested callbacks
// Demonstrates the "Pyramid of Doom" with an exaggerated QA test scenario

function step1(callback) {
    setTimeout(function () { console.log("Step 1: Open Chrome browser"); callback(); }, 100);
}
function step2(callback) {
    setTimeout(function () { console.log("Step 2: Maximize window"); callback(); }, 100);
}
function step3(callback) {
    setTimeout(function () { console.log("Step 3: Navigate to app.vwo.com"); callback(); }, 100);
}
function step4(callback) {
    setTimeout(function () { console.log("Step 4: Wait for page load"); callback(); }, 100);
}
function step5(callback) {
    setTimeout(function () { console.log("Step 5: Check page title"); callback(); }, 100);
}
function step6(callback) {
    setTimeout(function () { console.log("Step 6: Enter email in username field"); callback(); }, 100);
}
function step7(callback) {
    setTimeout(function () { console.log("Step 7: Enter password in password field"); callback(); }, 100);
}
function step8(callback) {
    setTimeout(function () { console.log("Step 8: Click Remember Me checkbox"); callback(); }, 100);
}
function step9(callback) {
    setTimeout(function () { console.log("Step 9: Click Login button"); callback(); }, 100);
}
function step10(callback) {
    setTimeout(function () { console.log("Step 10: Wait for dashboard to load"); callback(); }, 100);
}
function step11(callback) {
    setTimeout(function () { console.log("Step 11: Verify dashboard URL"); callback(); }, 100);
}
function step12(callback) {
    setTimeout(function () { console.log("Step 12: Check user profile name"); callback(); }, 100);
}
function step13(callback) {
    setTimeout(function () { console.log("Step 13: Navigate to Settings page"); callback(); }, 100);
}
function step14(callback) {
    setTimeout(function () { console.log("Step 14: Update profile picture"); callback(); }, 100);
}
function step15(callback) {
    setTimeout(function () { console.log("Step 15: Save profile changes"); callback(); }, 100);
}
function step16(callback) {
    setTimeout(function () { console.log("Step 16: Verify success toast message"); callback(); }, 100);
}
function step17(callback) {
    setTimeout(function () { console.log("Step 17: Logout from application"); callback(); }, 100);
}
function step18(callback) {
    setTimeout(function () { console.log("Step 18: Verify redirect to login page"); callback(); }, 100);
}
function step19(callback) {
    setTimeout(function () { console.log("Step 19: Clear browser cache"); callback(); }, 100);
}
function step20(callback) {
    setTimeout(function () { console.log("Step 20: Close browser"); callback(); }, 100);
}
function step21(callback) {
    setTimeout(function () { console.log("Step 21: Generate test report"); callback(); }, 100);
}
function step22(callback) {
    setTimeout(function () { console.log("Step 22: Send report via email"); callback(); }, 100);
}
function step23(callback) {
    setTimeout(function () { console.log("Step 23: Clean up test data"); callback(); }, 100);
}
function step24(callback) {
    setTimeout(function () { console.log("Step 24: Mark test case as PASSED"); callback(); }, 100);
}

// 🔥 CallBack Hell - 24 levels deep nesting
step1(function () {
    step2(function () {
        step3(function () {
            step4(function () {
                step5(function () {
                    step6(function () {
                        step7(function () {
                            step8(function () {
                                step9(function () {
                                    step10(function () {
                                        step11(function () {
                                            step12(function () {
                                                step13(function () {
                                                    step14(function () {
                                                        step15(function () {
                                                            step16(function () {
                                                                step17(function () {
                                                                    step18(function () {
                                                                        step19(function () {
                                                                            step20(function () {
                                                                                step21(function () {
                                                                                    step22(function () {
                                                                                        step23(function () {
                                                                                            step24(function () {
                                                                                                console.log("🏁 Test Suite Execution Complete!");
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
