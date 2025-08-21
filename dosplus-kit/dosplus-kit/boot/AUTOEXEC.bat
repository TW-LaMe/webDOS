@ECHO OFF
SET PATH=C:\FREEDOS\BIN;C:\HX;C:\UTILS;%PATH%
SET TEMP=C:\TEMP

LH C:\DOSLFN\DOSLFN.COM /Z
LH C:\FREEDOS\BIN\CWSDPR0.EXE
C:\HX\HXDRV.EXE

ECHO =======================================
ECHO        DOS+ Environment Ready
ECHO =======================================

CALL MENU.BAT
