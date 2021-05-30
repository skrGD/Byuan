

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended'
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],

  // http://www.verydoc.net/eslint/00003312.html
  'rules': {
    'no-multiple-template-root': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-alert': 0,//禁止使用alert confirm prompt
    'no-array-constructor': 2,//禁止使用数组构造器
    'no-const-assign': 2,//禁止修改const声明的变量
    'no-class-assign': 2,//禁止给类赋值
    'no-caller': 1,//禁止使用arguments.caller或arguments.callee
    'no-constant-condition': 2,//禁止在条件中使用常量表达式 if(true) if(1)
    'no-continue': 0,//禁止使用continue
    'no-control-regex': 2,//禁止在正则表达式中使用控制字符
    'no-dupe-keys': 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
    'no-dupe-args': 2,//函数参数不能重复
    'no-duplicate-case': 2,//switch中的case标签不能重复
    'no-else-return': 0,//如果if语句里面有return,后面不能跟else语句
    'no-empty': 2,//块语句中的内容不能为空
    'no-empty-character-class': 2,//正则表达式中的[]内容不能为空
    'no-eq-null': 2,//禁止对null使用==或!=运算符
    'no-eval': 2,//禁止使用eval
    'no-ex-assign': 2,//禁止给catch语句中的异常参数赋值
    'no-extend-native': 2,//禁止扩展native对象
    'no-extra-bind': 2,//禁止不必要的函数绑定
    'no-extra-boolean-cast': 2,//禁止不必要的bool转换
    'no-extra-parens': 2,//禁止非必要的括号
    'no-extra-semi': 2,//禁止多余的冒号
    'no-fallthrough': 1,//禁止switch穿透
    'no-floating-decimal': 2,//禁止省略浮点数中的0 .5 3.
    'no-func-assign': 2,//禁止重复的函数声明
    'no-implicit-coercion': 1,//禁止隐式转换
    'no-implied-eval': 2,//禁止使用隐式eval
    'no-inline-comments': 0,//禁止行内备注
    'no-inner-declarations': [2, 'functions'],//禁止在块语句中使用声明（变量或函数）
    'no-invalid-regexp': 2,//禁止无效的正则表达式
    'no-invalid-this': 2,//禁止无效的this，只能用在构造器，类，对象字面量
    'no-irregular-whitespace': 2,//不能有不规则的空格
    'no-labels': 2,//禁止标签声明
    'no-lone-blocks': 2,//禁止不必要的嵌套块
    'no-loop-func': 1,//禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    'no-mixed-spaces-and-tabs': [2, false],//禁止混用tab和空格
    'linebreak-style': [0, 'windows'],//换行风格
    'no-multi-spaces': 1,//不能用多余的空格
    'no-multi-str': 2,//字符串不能用\换行
    'no-multiple-empty-lines': [1, { 'max': 2 }],//空行最多不能超过2行
    'no-native-reassign': 2,//不能重写native对象
    'no-redeclare': 2,//禁止重复声明变量
    'no-self-compare': 2,//不能比较自身
    'no-shadow': 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    'no-spaced-func': 2,//函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 1,//一行结束后面不要有空格
    'no-use-before-define': 2,//未定义前不能使用
    'no-var': 2,//禁用var，用let和const代替
    'array-bracket-spacing': [2, 'never'],//是否允许非空数组里面有多余的空格
    'arrow-parens': 0,//箭头函数用小括号括起来
    'brace-style': [1, '1tbs'],//大括号风格
    'camelcase': 2,//强制驼峰法命名
    'comma-dangle': [2, 'never'],//对象字面量项尾不能有逗号
    'comma-spacing': 0,//逗号前后的空格
    'curly': [2, 'all'],//必须使用 if(){} 中的{}
    'default-case': 2,//switch语句最后必须有default
    'dot-notation': [0, { 'allowKeywords': true }],//避免不必要的方括号
    'eqeqeq': 2,//必须使用全等
    'func-style': [0, 'declaration'],//函数风格，规定只能使用函数声明/函数表达式
    'indent': [2, 2],//缩进风格
    'operator-linebreak': [2, 'after'],//换行时运算符在行尾还是行首
    'padded-blocks': 0,//块语句内行首行尾是否要空行
    'prefer-const': 0,//首选const
    'prefer-spread': 0,//首选展开运算
    'prefer-reflect': 0,//首选Reflect的方法
    'quotes': [1, 'single'],//引号类型 `` "" ''
    'quote-props': [0, 'always'],//对象字面量中的属性名是否强制双引号
    'semi': [2, 'always'],//语句强制分号结尾
    'semi-spacing': [0, { 'before': false, 'after': true }],//分号前后空格
    'keyword-spacing': 2,//return throw case后面要不要加空格
    'strict': 2,//使用严格模式
    'spaced-comment': 0,//注释风格要不要有空格什么的
    'use-isnan': 2,//禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2,//必须使用合法的typeof的值
    'vars-on-top': 2,//var必须放在作用域顶部
    'yoda': [2, 'never'],//禁止尤达条件
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        'vars': 'all',
        'args': 'none'
      }
    ],
    'no-unused-vars': [
      2,
      {
        'vars': 'all',
        'args': 'none'
      }
    ],
    'vue/html-self-closing': [
      2,
      {
        'html': {
          'void': 'always',
          'normal': 'never',
          'component': 'always'
        },
        'svg': 'always',
        'math': 'always'
      }
    ],
    'vue/max-attributes-per-line': [2, {
      'singleline': 0,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/singleline-html-element-content-newline': 0
  }
};
