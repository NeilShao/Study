### Object.freeze 和 Object.seal 的区别
- Object.freeze 做了三件事：
  1. Object.preventExtension() `-禁止添加属性`
  2. 给对象的每个属性设置 writeable: false `-禁止更改属性`
  3. 给对象的每个属性设置 configurable: false `-禁止删除属性`

- Object.seal 做了两件事：
  1. Object.preventExtension() `-禁止添加属性`
  2. 给对象的每个属性设置 configurable: false `-禁止删除属性`

- 总结：Object.seal后的对象是可写的， Object.freeze不可写


