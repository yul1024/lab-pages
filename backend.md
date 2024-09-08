# 后端
## 相关技术
- java 
  - jdk17
  - maven
- spring boot v3.2.4
  - RESTful API
- 没有建立数据库，以文件系统IO操作实现，可以传输图片。

## API
以"/api"开始
### 获取成员相关
1. 组织  
/api/group
1. 人员  
/api/member?group=${class}

### 获取文章相关
1. 文章列表  
/api/list
1. 具体文章  
/api/p/${id}
1. 特殊介绍  
/api/contactus
