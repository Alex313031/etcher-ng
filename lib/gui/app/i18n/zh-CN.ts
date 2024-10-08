const translation = {
	translation: {
		ok: '好',
		cancel: '取消',
		continue: '继续',
		skip: '跳过',
		sure: '我确定',
		warning: '请注意！',
		attention: '请注意',
		failed: '失败',
		completed: '完毕',
		yesExit: '是的，可以退出',
		reallyExit: '真的要现在退出 Etcher-ng 吗？',
		yesContinue: '是的，继续',
		progress: {
			starting: '正在启动……',
			decompressing: '正在解压……',
			flashing: '正在烧录……',
			finishing: '正在结束……',
			verifying: '正在验证……',
			failing: '失败……',
		},
		message: {
			sizeNotRecommended: '大小不推荐',
			tooSmall: '空间太小',
			locked: '被锁定',
			system: '系统盘',
			containsImage: '存放源镜像',
			largeDrive: '很大的磁盘',
			sourceLarger: '所选的镜像比目标盘大了 {{byte}} 比特。',
			flashSucceed_one: '烧录成功',
			flashSucceed_other: '烧录成功',
			flashFail_one: '烧录失败',
			flashFail_other: '烧录失败',
			toDrive: '到 {{description}} ({{name}})',
			toTarget_one: '到 {{num}} 个目标',
			toTarget_other: '到 {{num}} 个目标',
			andFailTarget_one: '并烧录失败了 {{num}} 个目标',
			andFailTarget_other: '并烧录失败了 {{num}} 个目标',
			succeedTo: '{{name}} 被成功烧录 {{target}}',
			exitWhileFlashing:
				'您当前正在刷机。 关闭 Etcher-ng 可能会导致您的磁盘无法使用。',
			looksLikeWindowsImage:
				'看起来您正在尝试刻录 Windows 镜像。\n\n与其他镜像不同，Windows 镜像需要特殊处理才能使其可启动。 我们建议您使用专门为此目的设计的工具，例如 <a href="https://rufus.akeo.ie">Rufus</a> (Windows)、<a href="https://github. com/slacka/WoeUSB">WoeUSB</a> (Linux) 或 Boot Camp 助理 (macOS)。',
			image: '镜像',
			drive: '磁盘',
			missingPartitionTable:
				'看起来这不是一个可启动的{{type}}。\n\n这个{{type}}似乎不包含分区表，因此您的设备可能无法识别或无法正确启动。',
			largeDriveSize: '这是个很大的磁盘！请检查并确认它不包含对您很重要的信息',
			systemDrive: '选择系统盘很危险，因为这将会删除你的系统',
			sourceDrive: '源镜像位于这个分区中',
			noSpace: '磁盘空间不足。 请插入另一个较大的磁盘并重试。',
			genericFlashError:
				'出了点问题。如果源镜像曾被压缩过，请检查它是否已损坏。\n{{error}}',
			validation:
				'写入已成功完成，但 Etcher-ng 在从磁盘读取镜像时检测到潜在的损坏问题。 \n\n请考虑将镜像写入其他磁盘。',
			openError: '打开 {{source}} 时出错。\n\n错误信息： {{error}}',
			flashError: '烧录 {{image}} {{targets}} 失败。',
			unplug:
				'看起来 Etcher-ng 失去了对磁盘的连接。 它是不是被意外拔掉了？\n\n有时这个错误是因为读卡器出了故障。',
			cannotWrite:
				'看起来 Etcher-ng 无法写入磁盘的这个位置。 此错误通常是由故障的磁盘、读取器或端口引起的。 \n\n请使用其他磁盘、读卡器或端口重试。',
			childWriterDied:
				'写入进程意外崩溃。请再试一次，如果问题仍然存在，请联系 Etcher-ng 团队。',
			badProtocol: '仅支持 http:// 和 https:// 开头的网址。',
		},
		target: {
			selectTarget: '选择目标磁盘',
			plugTarget: '请插入目标磁盘',
			targets: '个目标',
			change: '更改',
		},
		menu: {
			edit: '编辑',
			view: '视图',
			devTool: '打开开发者工具',
			window: '窗口',
			help: '帮助',
			pro: 'Etcher 专业版',
			website: 'Etcher 的官网',
			issue: '提交一个 Issue',
			devmenu: '开发商',
			electrondevtools: '打开 Electron 开发工具',
			testwindow: '打开测试窗口',
			config: '编辑配置文件',
			restart: '重新启动应用程序',
			gpu: '打开 chrome://gpu',
			procinternals: '打开 chrome://process-internals',
			goback: '回去',
			goforward: '前进',
			about: '关于 Etcher-ng',
			hide: '隐藏 Etcher-ng',
			hideOthers: '隐藏其它窗口',
			unhide: '取消隐藏',
			quit: '退出 Etcher-ng',
		},
		source: {
			useSourceURL: '使用镜像网络地址',
			auth: '验证',
			username: '输入用户名',
			password: '输入密码',
			unsupportedProtocol: '不支持的协议',
			windowsImage: '这可能是 Windows 系统镜像',
			partitionTable: '找不到分区表',
			errorOpen: '打开源镜像时出错',
			fromFile: '从文件烧录',
			fromURL: '从在线地址烧录',
			clone: '克隆磁盘',
			image: '镜像信息',
			name: '名称：',
			path: '路径：',
			selectSource: '选择源',
			plugSource: '请插入源磁盘',
			osImages: '系统镜像格式',
			allFiles: '任何文件格式',
			enterValidURL: '请输入一个正确的地址',
		},
		drives: {
			name: '名称',
			size: '大小',
			location: '位置',
			find: '找到 {{length}} 个',
			select: '选定 {{select}}',
			showHidden: '显示 {{num}} 个隐藏的磁盘',
			systemDriveDanger: '选择系统盘很危险，因为这将会删除你的系统！',
			openInBrowser: 'Etcher-ng 会在浏览器中打开 {{link}}',
			changeTarget: '改变目标',
			largeDriveWarning: '您即将擦除一个非常大的磁盘',
			largeDriveWarningMsg: '您确定所选磁盘不是存储磁盘吗？',
			systemDriveWarning: '您将要擦除系统盘',
			systemDriveWarningMsg: '您确定要烧录到系统盘吗？',
		},
		flash: {
			another: '烧录另一目标',
			target: '目标',
			location: '位置',
			error: '错误',
			flash: '烧录',
			flashNow: '现在烧录！',
			skip: '跳过了验证',
			moreInfo: '更多信息',
			speedTip:
				'通过将镜像大小除以烧录时间来计算速度。\n由于我们能够跳过未使用的部分，因此具有EXT分区的磁盘镜像烧录速度更快。',
			speed: '速度：{{speed}} MB/秒',
			speedShort: '{{speed}} MB/秒',
			eta: '预计还需要：{{eta}}',
			failedTarget: '失败的烧录目标',
			failedRetry: '重试烧录失败目标',
			flashFailed: '烧录失败。',
			flashCompleted: '烧录成功！',
		},
		settings: {
			errorReporting: '匿名地向 balena.io 报告运行错误和使用统计',
			verify: '刷机后自动验证',
			verifyDesc: '验证驱动器写入是否正确',
			autoUpdate: '自动更新',
			settings: '软件设置',
			systemInformation: '系统信息',
			trimExtPartitions: '修剪原始图像上未分配的空间（在 ext 类型分区中）',
			decompressFirst:
				'在刷新之前解压缩压缩图像（即 .tar.xz）',
		},
	},
};

export default translation;
