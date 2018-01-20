import express from "express";
import path from "path";
import open from "open";
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);


app.use(require('webpack-dev-middleware')(compiler,{
    noInfo : true,
    publicPath : webpackConfig.output.publicPath
}));

app.get('/',function (req,res) {
   res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(error) {
    if(error){
        console.log(error) //eslint-disable-line no-console
    } else {
        open('http://localhost:' + port);
    }
});
