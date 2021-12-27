//
//  RNConfig.m
//  ReactNativeWeb
//
//  Created by caner karaman on 28.12.2021.
//


#import "RNConfig.h"

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
#if DEV
  NSString *env=@"dev";
#elif DEBUG
  NSString *env=@"test";
#else
  NSString *env=@"prod";
#endif
  return @{ @"env":env};
}
+ (BOOL)requireMainQueueSetup
{
  return YES;
}
@end
