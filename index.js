import readline from "readline";
import handleDns from "./dns.mjs";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

console.log("请选择一个选项：");
console.log("1. dns解析");
console.log("2. 获取当前时间");

rl.question("请输入选项的编号：", (answer) => {
	switch (answer) {
		case "1":
			handleDns(rl);
			break;
	}
});
