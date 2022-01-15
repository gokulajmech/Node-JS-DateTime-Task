// const os=require('os');
// console.log(os.cpus());
 //const fs=require('fs');
// function read(){
//    let file_data= fs.readFileSync('sample.txt','UTF-8');
//    console.log(file_data);

// }
// read()
// function write()
// {
//     fs.writeFileSync('sample.txt','hi awesome all');
// }
// write();
// read();
const fs=require('fs');
const http=require('http');
const PORT=3000;
const data=new Date().toString();

fs.writeFileSync('DateTime/date-time.txt',data);
fs.readFile('DateTime/date-time.txt',(err,data)=>{
  
   if(err)
   console.log(err);
   
        http.createServer((req,res)=>{
            res.writeHeader(200,{"Content-Type":"text/html"})
             res.write(data);
             res.end()
         }).listen(PORT,()=>{console.log("listen the port :"+PORT)})
        
})



