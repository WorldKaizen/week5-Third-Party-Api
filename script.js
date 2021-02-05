var p = scheduling 

//create a new calendar instance
var calendar = new p.calendar(document.getElementById("calendar"));

calendar.theme=" light red";

calendar.selectionEnd.addEventListener(handleSelection);
calendar.headerClick.addEventListener(handleHeaderClick);



//visualize the calendar 
calendar.render();

function handleSelection(sender,args)
{
    if(sender.currentview === p.CalendarView.singleMonth)
{
    //cancel the default behavior
    args.cancel = true;

    var start= args.startTime;
    var end = args.endTime;

    //clear all dates from the timetable
    sender.timeSettings.dates.clear();

    while(start< end)
    {
        sender.timetableSettings.dates.add(start);
        start = p.DateTime. addDays(start,1);
    }
    

    sender.currentview === p.CalendarView.Timetable;
}
