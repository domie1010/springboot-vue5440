const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot4lkld/",
            name: "springboot4lkld",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4lkld/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "在线动漫信息平台"
        } 
    }
}
export default base
