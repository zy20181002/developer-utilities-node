const dns = require("dns");
const readline = require("readline");

// 创建一个readline接口实例
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("请输入您需要解析的域名：");

// 监听line事件，该事件在用户按下回车键时触发
rl.on("line", (input) => {
	console.log(`您输入的域名: ${input}`);

	// 在此处可以处理输入内容，例如进行DNS查询
	dns.lookup(input.trim(), (err, address, family) => {
		if (err) {
			console.error(`Error: ${err.message}`);
		} else {
			console.log(`IP地址: ${address}, IPFamily: IPv${family}`);
		}
	});

	// 如果不希望程序继续运行，可以调用rl.close()来关闭输入
	// rl.close();
});

// 监听关闭事件
rl.on("close", () => {
	console.log("Input stream closed.");
	process.exit(0);
});
