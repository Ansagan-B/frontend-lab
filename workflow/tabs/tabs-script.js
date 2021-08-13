function selectTab(tabIndex) {
    //Removing class "select"
    document.getElementById('tabs-1').classList.remove('select');
    document.getElementById('tabs-2').classList.remove('select');
    document.getElementById('tabs-3').classList.remove('select');
    document.getElementById('tabs-4').classList.remove('select');

    //Hide All Tabs
    document.getElementById('tabContent1').style.display="none";
    document.getElementById('tabContent2').style.display="none";
    document.getElementById('tabContent3').style.display="none";
    document.getElementById('tabContent4').style.display="none";

    //Show the Selected Content
    document.getElementById('tabContent' + tabIndex).style.display="block";
    document.getElementById('tabs-' + tabIndex).classList.add('select');
}

