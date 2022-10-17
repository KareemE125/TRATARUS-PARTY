
function closeSideDrawer()
{
    const sideBarWidth = $("nav .links").outerWidth();
    $("nav").animate({"left": $("nav").css("left") === '0px'? `-${sideBarWidth}px` : '0px' },500)
}

$("nav #drawer").click(closeSideDrawer)
$("nav .links i").click(closeSideDrawer)