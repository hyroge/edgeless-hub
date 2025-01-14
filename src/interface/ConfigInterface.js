//在Config文件夹新建文件夹就可以完成的配置
export default [
    {
        title: "禁用固定浏览器到任务栏",
        description: "Edgeless会在启动时将所有找到的现代浏览器固定至任务栏",
        information: "",
        higherThan: "4.0.2",
        folderName: "DisablePinBrowsers"
    },
    {
        title: "电源键默认重启",
        description: "将开始菜单处的关机键替换为重启",
        information: "替换之后关机键将被收至折叠面板中",
        higherThan: "3.1.0",
        folderName: "RebootDefault"
    },
    {
        title: "禁用外置Launcher脚本警告",
        description: "使外置Launcher的警告失效",
        information: "警告仍然会弹出，但是只是起到警示的作用，不会暂停外置批处理的运行",
        higherThan: "2.2.0",
        lowerThan: "4.0.0",
        folderName: "Developer"
    },
    {
        title: "禁用过期插件包检测与提醒",
        description: "Edgeless将不会提示过期的插件包",
        information: "",
        higherThan: "2.2.0",
        lowerThan: "4.0.0",
        folderName: "NoOutDateCheck"
    },
    {
        title: "禁用U盘管家",
        description: "桌面上的悬浮窗及其配套软件会被禁用",
        information: "",
        higherThan: "3.0.0",
        folderName: "DisableUSBManager"
    },
    {
        title: "禁用智能虚拟光驱",
        description: "如果您安装ISO镜像时遇到问题请禁用此选项",
        information: "禁用之后资源管理器将会接管.iso文件的关联",
        higherThan: "3.0.6",
        folderName: "DisableSmartISO"
    },
    {
        title: "展开资源管理器上方功能区",
        description: "默认情况下资源管理器上方功能区处于折叠状态",
        information: "",
        higherThan: "3.0.5",
        lowerThan: "4.0.0",
        folderName: "UnfoldRibbon"
    },
    {
        title: "禁用回收站",
        description: "禁用后无法在回收站找到误删的文件",
        information: "",
        higherThan: "3.0.6",
        folderName: "DisableRecycleBin"
    },
    {
        title: "启用全局无人值守安装",
        description: "运行原版Windows镜像的setup.exe或使用NTSetup时，程序会自动使用Edgeless内置的无人值守文件作为系统安装的自动应答文件",
        information: "理论上支持Windows7/8/8.1/10/2008/2008 R2/2012/2012 R2/2016/2019\n" +
            "基本能力：免填写安装序列号、自动开通免密码的Administrator账号（隶属于Administrators组）登录桌面；中文环境、时区选择、网络等等OOBE配置",
        higherThan: "3.0.0",
        folderName: "AutoUnattend"
    },
    {
        title: "使用微PE同款的盘符整理方案",
        description: "如果您认为盘符整理不尽人意可以尝试此选项",
        information: "Edgeless自带的盘符整理程序与victor888大神发布的最新版本保持同步，至少为2019年及之后发布的版本；而此开关调用的盘符整理程序为victor888大神于2013-09-25发布的版本，因此如果您启用了此开关但是没有看到显著的效果属于正常现象",
        higherThan: "3.0.5",
        folderName: "OrderDrvAnotherWay"
    },
    {
        title: "禁用开机启动画面",
        description: "关闭LoadScreen，您会看到Edgeless的启动过程",
        information: "虽然此选项能够让您尽快看到桌面，但在此期间不建议您执行操作",
        higherThan: "3.1.0",
        folderName: "DisableLoadScreen"
    },
    {
        title: "干预盘符整理过程-1",
        description: "将Edgeless找到的第一块硬盘（通常是SSD）活动分区所在的盘符排在所有盘符之前",
        information: "如果没有启用此开关，Edgeless不改变硬盘分区盘符顺序，盘符排列的顺序和在磁盘管理软件中看到的一样",
        higherThan: "3.0.0",
        folderName: "UpActDrv"
    },
    {
        title: "干预盘符整理过程-2",
        description: "如果磁盘上没有活动分区，将Edgeless找到的第一块硬盘（通常是SSD）含有Windows系统的分区盘符放在第一位；如果有活动分区，将含有活动分区所在的盘符排在第一位",
        information: "由于此开关实际上是 干预盘符整理过程-1 的高级版本，因此如果同时打开了这两个开关，程序会使用此开关的方案",
        higherThan: "3.0.0",
        folderName: "WinFirst"
    },
    {
        title: "挂载所有分区",
        description: "进入Edgeless时显示所有找到的分区，包括任何可识别的引导分区和保留分区",
        information: "",
        higherThan: "3.1.5",
        folderName: "MountEveryPartition"
    }
]