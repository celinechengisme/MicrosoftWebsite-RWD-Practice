$(document).ready(function(){// 使用 jQuery 的 ready() 函数，确保 DOM 加载完毕后执行代码，下方為jquery寫法
    $('.submenu').hide(); // 隐藏子菜單

    $('.more').click(function(event){// 添加 event 參數
        event.stopPropagation(); // 阻止事件冒泡到父元素，若不加入這行就會導致more點擊時會觸發.menu-btn和.nav-l的style變化
        
        // 检查当前子菜單的显示状态
        var submenu = $(this).find('.submenu');
        var isSubmenuVisible = submenu.is(':visible');
        
        // 如果子菜單已显示，则隐藏；否则显示
        submenu.toggle(!isSubmenuVisible);
    });
   
});

document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var dropmenu = document.querySelector('.nav-l');

    menuBtn.addEventListener('click', function(event) {
        event.stopImmediatePropagation();

        // 切换菜单按钮的背景图片
        menuBtn.classList.toggle('menu-open');
        
        // 切换菜单的显示/隐藏状态
        dropmenu.style.display = dropmenu.style.display === 'none' ? 'flex' : 'none';
        dropmenu.style.flexDirection = dropmenu.style.flexDirection === 'column' ? 'row' : 'column';
    });

    window.addEventListener('resize', function() {
        // var tolerance = -0.9;// 容差范围，單位為px
        // 如果窗口宽度大于 859px，则显示菜单
        if (window.innerWidth > 859 ) {
            dropmenu.style.display = 'flex';
        } else {
            // 否则，隐藏菜单
            dropmenu.style.display = 'none';
        }
    });

    // 初始化窗口大小，以确保在页面加载后正确显示菜单
    window.dispatchEvent(new Event('resize'));
});

window.addEventListener('resize', function() {
    var searchIcon = document.querySelector('.search-2');

    if (window.innerWidth <= 859 ) {
        searchIcon.classList.add('absolute-position');
        var menuBtn = document.querySelector('.menu-btn');
        var searchIcon = document.querySelector('.search-2');
        menuBtn.appendChild(searchIcon);
    } else {
        searchIcon.classList.remove('absolute-position');
        var navrOnlyicon = document.querySelector('.nav-r-onlyicon');
        var originalSearchIcon = document.querySelector('.nav-r-onlyicon .search-2');
        if (originalSearchIcon) {
            // 如果原始搜索图标存在，则将搜索图标插入到原始搜索图标的前面
            navrOnlyicon.insertBefore(searchIcon, originalSearchIcon);
        } else {
            // 如果原始搜索图标不存在，则将搜索图标插入到第二个位置
            var secondChild = navrOnlyicon.children[1];
            navrOnlyicon.insertBefore(searchIcon, secondChild);
        }
    }
});






