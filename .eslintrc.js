// eslint 检查配置
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:vue/essential"],
    "plugins": [
    	"vue"
    ],
    "globals": {
    	"App": "readonly",
    	"Component": "readonly",
    	"Page": "readonly",
    	"wx": "readonly",
    	"qq": "readonly",
    	"swan": "readonly",
    	"tt": "readonly",
    	"uni": "readonly",
    	"plus": "readonly",
		"weex": "readonly"
    },
    "rules": {
		"no-cond-assign": "off",
		"no-mixed-spaces-and-tabs": "off",  // HBuilderX 格式化就会产生 tab 与空格混合
		"vue/valid-v-else": "off", 	        // 条件编译会导致多个 v-else
		"no-console": ["error", { "allow": ["warn", "error"] }],
		"no-constant-condition": ["error", { "checkLoops": false }]
    }
};