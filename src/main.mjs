import{dom}from'https://gitcdn.link/cdn/anliting/simple.js/5ffa9085990ca94f4a842d4bc893f5e87048b3b5/src/simple.static.js'
function MouseTester(){
    let
        xPassedLayer,
        yPassedLayer,
        mouseXPositionAxis,
        mouseYPositionAxis,
        passedX={},
        passedY={},
        mouseTester=this
    this.node=dom.div(
        {
            className:'mouseTester',
            onmousemove(e){
                mouseXPositionAxis.style.left=`${e.clientX}px`
                mouseYPositionAxis.style.top=`${e.clientY}px`
                if(!passedX[e.clientX]){
                    passedX[e.clientX]=1
                    dom(
                        xPassedLayer,
                        dom.div({
                            className:'axis verticalAxis',
                        },n=>{
                            n.style.left=`${e.clientX}px`
                            n.style.backgroundColor=`rgba(255,0,0,.2)`
                        })
                    )
                }
                if(!passedY[e.clientY]){
                    passedY[e.clientY]=1
                    dom(
                        yPassedLayer,
                        dom.div({
                            className:'axis horizontalAxis',
                        },n=>{
                            n.style.top=`${e.clientY}px`
                            n.style.backgroundColor=`rgba(0,0,255,.2)`
                        })
                    )
                }
            },
        },
        xPassedLayer=dom.div(),
        yPassedLayer=dom.div(),
        mouseXPositionAxis=dom.div({
            className:'axis verticalAxis'
        }),
        mouseYPositionAxis=dom.div({
            className:'axis horizontalAxis'
        }),
    )
}
MouseTester.style=`
    .mouseTester{
        position:relative;
        overflow:hidden;
    }
    .mouseTester .axis{
        position:absolute;
        background-color:black;
    }
    .mouseTester .horizontalAxis{
        width:100%;
        height:1px;
        left:0;
    }
    .mouseTester .verticalAxis{
        width:1px;
        height:100%;
        top:0;
    }
`
let mouseTester=new MouseTester
dom.head(
    dom.style(`
        html{
            height:100%;
        }
        body{
            height:100%;
            margin:0;
        }
        body>.mouseTester{
            height:100%;
        }
        ${MouseTester.style}
    `)
)
dom.body(
    mouseTester.node
)
