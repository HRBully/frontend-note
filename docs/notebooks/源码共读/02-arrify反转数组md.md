## package.json

```json
"devDependencies": {
		"ava": "^3.15.0",
		"tsd": "^0.14.0",
		"xo": "^0.39.1"
	}
```

### ava

`ava`可以用来进行Node的测试运行，它具有小巧，简单，易用等优点，我们可以看它的`npm`文档：[ava - npm (npmjs.com)](https://www.npmjs.com/package/ava)，我们可以在项目的`test.js`文件中看到它的使用

```js
import test from 'ava';
import arrify from './index.js';

test('main', t => {
	t.deepEqual(arrify('foo'), ['foo']);
	t.deepEqual(arrify(new Map([[1, 2], ['a', 'b']])), [[1, 2], ['a', 'b']]);
	t.deepEqual(arrify(new Set([1, 2])), [1, 2]);
	t.deepEqual(arrify(null), []);
	t.deepEqual(arrify(undefined), []);

	const fooArray = ['foo'];
	t.is(arrify(fooArray), fooArray);
});
```

- `test()`可以为我们创建一个测试，通过传入的参数，这里为`t`我们可以调用一些api来测试我们的程序，比如`t.deepEqual`
- 这里是使用了`deepEqual()`来测试

![image-20221231205039556](https://raw.githubusercontent.com/HRBully/Img/main/image-20221231205039556.png)

- 待总结