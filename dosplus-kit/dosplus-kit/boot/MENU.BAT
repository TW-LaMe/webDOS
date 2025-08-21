@ECHO OFF
REM === DOS+ Main Menu with Flourishes ===

REM --- Random header “winks” ---
SET /A RAND=%RANDOM% %% 5
IF %RAND%==0 SET WINK=(Psst… wonder what’s behind option H?)
IF %RAND%==1 SET WINK=(CTRL+SHIFT+S works here too)
IF %RAND%==2 SET WINK=(The cursor is blinking at you)
IF %RAND%==3 SET WINK=(DOS+ says hello)
IF %RAND%==4 SET WINK=

:MENU
CLS
ECHO =======================================
ECHO         DOS+ Main Menu %WINK%
ECHO =======================================
ECHO.
ECHO  1) Launch App 1
ECHO  2) Launch App 2
ECHO  3) Disk Swap / Insert Media
ECHO  4) Make Your Own Program
ECHO  5) Save This Drive
ECHO  6) View Help / Onboarding
ECHO  7) Exit to DOS Prompt
IF EXIST C:\HAUNTED.UNL ECHO 8) ??? SECRET GAMES ???
ECHO.
CHOICE /C:12345678 /N /M "Select an option: "

IF ERRORLEVEL 8 GOTO SECRET
IF ERRORLEVEL 7 GOTO SHELL
IF ERRORLEVEL 6 GOTO HELP
IF ERRORLEVEL 5 GOTO SAVE
IF ERRORLEVEL 4 GOTO MAKE
IF ERRORLEVEL 3 GOTO SWAP
IF ERRORLEVEL 2 GOTO APP2
IF ERRORLEVEL 1 GOTO APP1

:APP1
CLS
ECHO Launching App 1...
CD \APP1
APP1.EXE
GOTO MENU

:APP2
CLS
ECHO Launching App 2...
CD \APP2
APP2.EXE
GOTO MENU

:SWAP
CLS
TYPE HELP\DISKSWAP.TXT
CALL :PRESSANY
GOTO MENU

:MAKE
CLS
TYPE DOCS\MAKE.TXT
CALL :PRESSANY
GOTO MENU

:SAVE
CLS
TYPE DOCS\SAVE.TXT
CALL :PRESSANY
GOTO MENU

:HELP
CLS
TYPE DOCS\WELCOME.TXT
CALL :PRESSANY
GOTO MENU

:SHELL
CLS
ECHO Returning to DOS prompt...
ECHO Type MENU to return here.
GOTO :EOF

:SECRET
CLS
IF EXIST C:\HAUNTED.BAT (
  CALL C:\HAUNTED.BAT
) ELSE (
  ECHO This path is not yet unlocked...
  CALL :PRESSANY
)
GOTO MENU

:PRESSANY
FOR %%A IN (▒░ ) DO (
    <NUL SET /P=Press any key to continue %%A
    PING -n 1 127.0.0.1 >NUL
    CLS
)
PAUSE >NUL
GOTO :EOF