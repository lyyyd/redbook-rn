// webbrowser
// 提供对系统 Web 浏览器的访问并支持处理重定向的库。

// expo - web - browser提供对系统 Web 浏览器的访问并支持处理重定向。
// 在 Android 上，它使用ChromeCustomTabs，在 iOS 上，它使用SFSafariViewController或SFAuthenticationSession，具体取决于您调用的方法。
// 从 iOS 11 开始，SFSafariViewController不再与 Safari 共享 cookie，因此如果您用于WebBrowser身份验证，您将需要使用WebBrowser.openAuthSessionAsync，如果您只想打开网页（例如您的应用程序隐私政策），则使用WebBrowser.openBrowserAsync。
