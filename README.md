### **Task 1: Setup**

1. Run through the Create an account flow on [Crowdcube](https://www.crowdcube.com/register)
2. Clone the [SDET technical test](https://github.com/crowdcube/sdet-technical-test) repository to your local machine
3. Open the repository and add he credentials for the account you've just created to [login.spec.ts](https://github.com/crowdcube/sdet-technical-test/tests/login.spec.ts)

Looking for what your day to day preferred toolchain is.

---

### **Task 2: Automation suite development**

#### **A: Adding login tests**

* What tests would you add?
* Add these tests
* How would you structure this file differently?

#### **B: Testing favourites**

* Add tests for favourites, load the [investments](https://www.crowdcube.com/investments?investmentType=primary_equity&order=relevance) and favourite multiple raises
* Load [companies you follow](https://www.crowdcube.com/followed-companies) and confirm raises have been favourited
* What tests would you add?

---

### **Task 3: Technical Discussion & Architectural Design**

Be prepared to discuss some/all of the following:

* How do you safely store, manage, and inject credentials across environments (local, CI/CD, production)?
* How do you prevent sensitive credentials from leaking in test artifacts, logs, or reports?
* Compare Selenium and Playwright (speed, auto-waiting, browser support, network mocking, and flakiness control)?
* How would you restructure this repository when scaling tests (execution time, dynamic test data, CI/CD, and reporting dashboard setups)?
