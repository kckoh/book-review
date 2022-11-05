
export default function html_css() {


    return (
      
        <div dangerouslySetInnerHTML={{__html:
              `
              <!DOCTYPE html>
              <html>
              <head>
              <meta charset="UTF-8">
              <title>웹 페이지의 구성 요소</title>
              <style>
                  body { background-color : linen; color : green;
                          margin-left : 40px; margin-right : 40px; }
                  h3 { text-align : center; color : darkred; }
                  hr { height : 5px; border:solid grey;
                          background-color : grey; }
                  span {color : blue; font-size : 20px; }
              </style>
              </head>
              <body>
              <h3>Elvis Presley</h3>
              <hr>
              He was an American singer and actor. In November 1956,
              he made his film debut in <span>Love Me Tender</span>.
              He is often referred to as "<span>the King of Rock and Roll</span>".
              </body>
              </html> 
             `
             }} />

      
    )
  }
  
