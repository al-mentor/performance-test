# Mentor Portal Performance Testing with k6

This project is focused on performance testing for the Mentor Portal using the k6 load testing tool. It aims to measure the system's performance by simulating user traffic and analyzing key performance indicators.

## Installation

To run these performance tests, you need to have k6 installed on your machine. Follow the steps below to install k6:

 **Step 1**: Install k6 by following the instructions on the official k6 website: [https://k6.io/docs/getting-started/installation](https://k6.io/docs/getting-started/installation)


 **Step 2**: Clone this repository to your local machine:

 **Step 3**: Navigate to the project directory:

**Step 4**: Run the performance tests using the following command:

```k6 run .\{{scenario-script-file}}.js```

## Total RPM Calculation

To find the overall average RPM for the entire test duration eg.:
- Ramp-up Stage (1 minute): 10 RPM
- Steady Stage (3 minutes): 20 RPM
- Ramp-down Stage (1 minute): 10 RPM
**Total requests in the entire duration:**
- (10 RPM×1 minute)+(20 RPM×3 minutes)+(10 RPM×1 minute)=10+60+10=80 requests

**Total test duration is 5 minutes.**
Average RPM over the entire test duration:
80 requests / 5 minutes= 16 RPM

### Generating an HTML Report
**Export HTML Report**
import html report bundle
```javascript
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
```
Export handle summary function 
```javascript 
export function handleSummary(data) {
    return {
        'report.html': htmlReport(data),
    };
}
```
### Export Report as JSON
```k6 run --summary-export=summary.json your_test_script.js```




