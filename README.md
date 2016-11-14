# tools

自己写的自动化任务的小工具。

## pull.sh

---
可以自动把所有仓库的更新拉到本地。用法如下：


1. 将 pull.sh 下载到本地，并确保文件的位置关系如下：  

  x-dir    
   |    
   |-- repoA          // 这是 A 仓库的位置  
   |-- repoB          // 这是 B 仓库的位置   
   |-- ......    
   |-- repoN          // 这是 N 仓库的位置   
   |-- ......  
   |-- pull.sh        // 这是自动同步脚本    

2. 在 git bash 中，在 x-dir 目录下，运行命令  

  ```bash
     chmod +x pull.sh   // 设置该脚本运行权限 
  ```

3. 拉取更新的时候，请在 x-dir 目录下  

  ```bash
     ./pull.sh
  ```

