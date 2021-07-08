import request from 'umi-request';

export const reportClick = () =>
  request.post(
    'http://uat-api.growingio.com/v3/projects/91eaf9b283361032/collect?stm=1625717531121&compress=0',
    {
      data: [
        {
          dataSourceId: '955a56011f29a378',
          deviceId: '47777570-6d7c-4381-b65c-3c974de9504e',
          domain: 'release-messages.growingio.cn',
          eventSequenceId: 5,
          eventType: 'VIEW_CLICK',
          globalSequenceId: 18,
          language: 'zh-cn',
          pageShowTimestamp: 1625717528681,
          path: '/push/cdp/uat.html',
          platform: 'web',
          screenHeight: 1440,
          screenWidth: 2560,
          sdkVersion: '3.2.0',
          sessionId: '2f306e93-0f84-4bd5-9b96-8533cd41ea74',
          textValue: '点击埋点',
          timestamp: 1625717531118,
          title: 'SDKAutoCheck',
          xpath: '/div.title/div/div.title/button'
        }
      ]
    }
  );

export const reportChange = () =>
  request.post(
    'http://uat-api.growingio.com/v3/projects/91eaf9b283361032/collect?stm=1625717654438&compress=0',
    {
      data: [
        {
          dataSourceId: '955a56011f29a378',
          deviceId: '47777570-6d7c-4381-b65c-3c974de9504e',
          domain: 'release-messages.growingio.cn',
          eventSequenceId: 3,
          eventType: 'VIEW_CHANGE',
          globalSequenceId: 20,
          language: 'zh-cn',
          pageShowTimestamp: 1625717528681,
          path: '/push/cdp/uat.html',
          platform: 'web',
          screenHeight: 1440,
          screenWidth: 2560,
          sdkVersion: '3.2.0',
          sessionId: '2f306e93-0f84-4bd5-9b96-8533cd41ea74',
          timestamp: 1625717654435,
          title: 'SDKAutoCheck',
          xpath: '/div.title/form.basic-grey/label/input#name.name'
        }
      ]
    }
  );
