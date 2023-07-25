import * as cdk from '@aws-cdk/core';
import * as S3 from '@aws-cdk/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new S3.Bucket(this,'MyBucket', {      //This is how a bucket is defined.
      bucketName:'shash-bucket',  //These all are properties of a bucket.
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HelloCdkQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
