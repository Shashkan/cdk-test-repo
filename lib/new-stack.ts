import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs';
import * as ecs_patterns from '@aws-cdk/aws-ecs-patterns';
import * as ec2 from '@aws-cdk/aws-ec2';
import { Construct } from 'constructs';

export class MyEcsConstructStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.Stack) {
      super(scope, id);
  
      const vpc = new ec2.Vpc(this, "MyVpc", {
        maxAzs: 3 // Default is all AZs in region
      });
  
      const cluster = new ecs.Cluster(this, "MyCluster", {
        vpc: vpc
      });

     // Create a load-balanced Fargate service and make it public
      new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {
        cluster: cluster, // Required
        cpu: 512, // Default is 256
        desiredCount: 6, // Default is 1
        taskImageOptions: { image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample") },
        memoryLimitMiB: 2048, // Default is 512
        publicLoadBalancer: true // Default is false
      });
    }
  }