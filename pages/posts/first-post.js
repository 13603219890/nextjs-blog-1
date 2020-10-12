import React, {useCallback} from "react";
import Link from "next/Link";
import Head from "next/head";

console.log("执行了啊啊啊啊啊啊")

export default function X() {
    const clickMe = useCallback(() => {
        console.log("12312")
    }, [])
    return (
        <div>First Post

            <Link href="/"><a>回到首页</a></Link>
            <button onClick={clickMe}>点击</button>
        </div>
    )
}
//渲染页面：
//yarn add --dev @types/react @types/react-dom
//import React from "react";
//推测路径：/posts/first-post
//总结：
//1.约定大于配置
//2.不需要配置，只需要约定，开发者自然意会
//3.这是Rails的理念