import{dom}from 'https://gitcdn.link/cdn/anliting/simple.js/5ffa9085990ca94f4a842d4bc893f5e87048b3b5/src/simple.static.js'
function MouseTester(){
    let
        mouseXPositionAxis,
        mouseYPositionAxis
    this.node=dom.div(
        {
            className:'mouseTester',
            onmousemove(e){
                mouseXPositionAxis.style.left=`${e.clientX}px`
                mouseYPositionAxis.style.top=`${e.clientY}px`
            },
        },
        mouseXPositionAxis=dom.div({
            className:'mouseXPositionAxis'
        }),
        mouseYPositionAxis=dom.div({
            className:'mouseYPositionAxis'
        }),
    )
}
MouseTester.style=`
    .mouseTester{
        position:relative;
    }
    .mouseTester>.mouseXPositionAxis{
        position:absolute;
        width:1px;
        height:100%;
        background-color:black;
        top:0;
    }
    .mouseTester>.mouseYPositionAxis{
        position:absolute;
        width:100%;
        height:1px;
        background-color:black;
        left:0;
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