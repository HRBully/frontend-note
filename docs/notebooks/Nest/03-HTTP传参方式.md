五种数据传输格式

## url param

```js
http://guang.zxg/person/1111
```

在生成的CRUD模板中会有这种形式，诸如：`Mapped {/student/:id, GET} `

![image-20230705213836592](https://raw.githubusercontent.com/HRBully/Img/main/image-20230705213836592.png)

![image-20230705221201132](C:\Users\hogsk\AppData\Roaming\Typora\typora-user-images\image-20230705221201132.png)

在生成的模板文件中的`controller`内，使用`@Param`装饰器来将内部的`:id`注入到`controller`内部

## query

```js
http://guang.zxg/person?name=guang&age=20
```

```js
  @Get('find')
  query(@Query('name') name: string, @Query('age') age: number) {
    return `received: name=${name},age=${age}`;
  }
```

关于`query`可以使用`@Query`修饰器，添加请求的参数

## form-urlencoded

表单格式，请求头：content-type 是 `application/x-www-form-urlencoded`

```ts
export class CreateStudentDto {
  name: string;
  age: number;
}
```

```ts
  @Post()
  body(@Body() createPersonDto: CreateStudentDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
```

使用dto为前端端传输的表单数据进行封装，使用`@Body`装饰器来解析表单

## json

同上，无法传输文件，注意请求头的content-type的类型为json即可

## form-data

`Nest` 解析 `form data` 使用 `FilesInterceptor` 的拦截器，其中使用`@UseInterceptors`来启动，`@UploadedFiles() files`来对文件进行解析，得到文件，后面使用`@Body`来解析非文件的内容

```js
@Post('file')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads/',
    }),
  )
  body2(
    @Body() createPersonDto: CreateStudentDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    console.log(files);
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
```

