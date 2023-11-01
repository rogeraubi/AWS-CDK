#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();
new CdkWorkshopStack(app, 'CdkWorkshopStack');


// import * as cdk from 'aws-cdk-lib';
// import { WorkshopPipelineStack } from '../lib/pipeline-stack';

// const app = new cdk.App();
// new WorkshopPipelineStack(app, 'CdkWorkshopPipelineStack');