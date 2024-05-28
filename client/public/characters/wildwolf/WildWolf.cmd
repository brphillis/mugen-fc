[Remap]
x = x
y = y
z = z
a = a
b = b
c = c
s = s

;===============================================================================
;===============================================================================
[Defaults]
command.time = 15
command.buffer.time = 3

;===============================================================================
;===============================================================================
[Command]
name = "New Neomax"
command = ~D, F, $D, F,  c
time = 25
buffer.time = 6

;===============================================================================
[Command]
name = "パワーストリーム"
command = ~D, B, $D, B,  x+y
time = 25
buffer.time = 6

[Command]
name = "ヒートアップゲイザー"
command = ~D, F, $D, F, a+b
time = 25
buffer.time = 6

[Command]
name = "ライジング・フォース"
command = ~D, F, $D, F, x+y
time = 25
buffer.time = 6

[Command]
name = "トリプルゲイザー"
command = ~D, B, $D, F, x+y
time = 25
buffer.time = 6

;===============================================================================
[Command]
name = "弱マックスダンク"
command = ~D, F, $D, F, a
time = 25
buffer.time = 6
[Command]
name = "強マックスダンク"
command = ~D, F, $D, F, b
time = 25
buffer.time = 6

[Command]
name = "弱バスターウルフ"
command = ~D, F, $D, F, x
time = 25
buffer.time = 6
[Command]
name = "強バスターウルフ"
command = ~D, F, $D, F, y
time = 25
buffer.time = 6

[Command]
name = "弱パワーゲイザー"
command = ~D, B, $D, F, x
time = 25
buffer.time = 6
[Command]
name = "弱パワーゲイザー"
command = ~D, B, $D, F, y
time = 25
buffer.time = 6

;===============================================================================
;===============================================================================
[command]
name = "Gancho EX"
command = ~F, D, DF, a+b
buffer.time = 6
[command]
name = "Gancho Corto"
command = ~F, D, DF, a
buffer.time = 6
[command]
name = "Gancho Largo"
command = ~F, D, DF, b
buffer.time = 6

[Command]
name = "弱パワーチャージ追加"
command = ~D,DF,F, a
buffer.time = 6
[Command]
name = "強パワーチャージ追加"
command = ~D,DF,F, b
buffer.time = 6

[Command]
name = "弱パワーチャージEX"
command = ~D,DF,F, a+b
buffer.time = 6
[Command]
name = "弱パワーチャージ"
command = ~D,DF,F, a
buffer.time = 6
[Command]
name = "強パワーチャージ"
command = ~D,DF,F, b
buffer.time = 6

[Command]
name = "弱パワーダンク"
command = ~F,D,DF, x
buffer.time = 6
[Command]
name = "強パワーダンク"
command = ~F,D,DF, y
buffer.time = 6

[Command]
name = "弱クラックシュートEX"
command = ~D,DB,B, a+b
buffer.time = 6
[Command]
name = "弱クラックシュート"
command = ~D,DB,B, a
buffer.time = 6
[Command]
name = "強クラックシュート"
command = ~D,DB,B, b
buffer.time = 6

[Command]
name = "弱バーンナックル"
command = ~D,DB,B, x
buffer.time = 6
[Command]
name = "強バーンナックル"
command = ~D,DB,B, y
buffer.time = 6

[Command]
name = "ラウンドウェイブ"
command = ~D,DF,F, x+y
buffer.time = 6
[Command]
name = "弱パワーウェイブ"
command = ~D,DF,F, x
buffer.time = 6
[Command]
name = "強パワーウェイブ"
command = ~D,DF,F, y
buffer.time = 6

[Command]
name = "緊急回避前"
command = x+a
time = 1

[Command]
name = "緊急回避後"
command = /$B,x+a
time = 1

;-| ２回押し技 |-----------------------------------------------------------
[Command]
name = "FF"     
command = F, F
time = 10

[Command]
name = "BB"     
command = B, B
time = 10

;-| ２・３個の同時押し技 |-----------------------------------------------
[Command]
name = "recovery"
command = x+a
time = 1

[Command]
name = "ふっ飛ばし"
command = y+b
time = 1
[Command]
name = "ふっ飛ばし"
command = c
time = 1

[Command]
name = "MAX"
command = z
time = 1

[Command]
name = "ストライカー"
command = a+y
time = 1

[Command]
name = "ゲージ溜め発動"
command = z+c
time = 1

[Command]
name = "おしっぱなしx"
command = /$x
time = 1

[Command]
name = "おしっぱなしy"
command = /$y
time = 1

[Command]
name = "おしっぱなしa"
command = /$a
time = 1

[Command]
name = "おしっぱなしb"
command = /$b
time = 1

[Command]
name = "おしっぱなしz"
command = /$z
time = 1

[Command]
name = "おしっぱなしc"
command = /$c
time = 1

;-| 方向とボタンで出す技 |---------------------------------------------------------
[Command]
name = "ライジングアッパー"
command = /$DF,y
time = 1


[Command]
name = "down_a"
command = /$D,a
time = 1

[Command]
name = "down_b"
command = /$D,b
time = 1

;-| ボタン設定（いじらない）|---------------------------------------------------------
[Command]
name = "a"
command = a
time = 1

[Command]
name = "b"
command = b
time = 1

[Command]
name = "c"
command = c
time = 1

[Command]
name = "x"
command = x
time = 1

[Command]
name = "y"
command = y
time = 1

[Command]
name = "z"
command = z
time = 1

[Command]
name = "start"
command = s
time = 1

;-| 押しっぱなし設定（いじらない）-------------------------------------------------------
[Command]
name = "holdfwd"
command = /$F
time = 1

[Command]
name = "holdback"
command = /$B
time = 1

[Command]
name = "holdup" 
command = /$U
time = 1

[Command]
name = "holddown"
command = /$D
time = 1

[Command]
name = "hold_a"
command = /$a
time = 1

[Command]
name = "hold_y"
command = /$y
time = 1

[Command]
name = "jump"
command = D, $U
time = 12

[command]
name="longjump"
command=$D,$U
time=18

;===============================================================================
;===============================================================================
[Statedef -1]
;===============================================================================
;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2700
triggerall = var(59) = 0
triggerall = command = "New Neomax"
triggerall = power >= ifelse(Var(20)>0,2000,3000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2600
triggerall = var(59) = 0
triggerall = command = "パワーストリーム"
triggerall = power >= ifelse(Var(20)>0,1000,2000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=2101||stateno=2100||stateno=2201||stateno=2200||stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]
trigger5 = stateno = 2000 && enemynear,GetHitVar(chainid) = 2011 && time =[38,60]
trigger6 = stateno = 2110 && enemynear,GetHitVar(chainid) = 2110 && time =[10,25]
trigger7 = stateno = 2215 && enemynear,GetHitVar(chainid) = 2011 && time =[10,40]

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2500
triggerall = var(59) = 0
triggerall = command = "ヒートアップゲイザー"
triggerall = power >= ifelse(Var(20)>0,1000,2000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=2101||stateno=2100||stateno=2201||stateno=2200||stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]
trigger5 = stateno = 2000 && enemynear,GetHitVar(chainid) = 2011 && time =[38,60]
trigger6 = stateno = 2110 && enemynear,GetHitVar(chainid) = 2110 && time =[10,25]
trigger7 = stateno = 2215 && enemynear,GetHitVar(chainid) = 2011 && time =[10,40]

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2400
triggerall = var(59) = 0
triggerall = command = "ライジング・フォース"
triggerall = power >= ifelse(Var(20)>0,1000,2000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=2101||stateno=2100||stateno=2201||stateno=2200||stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]
trigger5 = stateno = 2000 && enemynear,GetHitVar(chainid) = 2011 && time =[38,60]
trigger6 = stateno = 2110 && enemynear,GetHitVar(chainid) = 2110 && time =[10,25]
trigger7 = stateno = 2215 && enemynear,GetHitVar(chainid) = 2011 && time =[10,40]

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2300
triggerall = var(59) = 0
triggerall = command = "トリプルゲイザー"
triggerall = power >= ifelse(Var(20)>0,1000,2000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=2101||stateno=2100||stateno=2201||stateno=2200||stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]
trigger5 = stateno = 2000 && enemynear,GetHitVar(chainid) = 2011 && time =[38,60]
trigger6 = stateno = 2110 && enemynear,GetHitVar(chainid) = 2110 && time =[10,25]
trigger7 = stateno = 2215 && enemynear,GetHitVar(chainid) = 2011 && time =[10,40]

;===============================================================================
;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2200
triggerall = var(59) = 0
triggerall = command = "弱マックスダンク"
triggerall = power >= ifelse(Var(20)>0,0,1000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2201
triggerall = var(59) = 0
triggerall = command = "強マックスダンク"
triggerall = power >= ifelse(Var(20)>0,0,1000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2100
triggerall = var(59) = 0
triggerall = command = "弱バスターウルフ"
triggerall = power >= ifelse(Var(20)>0,0,1000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2101
triggerall = var(59) = 0
triggerall = command = "強バスターウルフ"
triggerall = power >= ifelse(Var(20)>0,0,1000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 2000
triggerall = var(59) = 0
triggerall = command = "弱パワーゲイザー"
triggerall = power >= ifelse(Var(20)>0,0,1000)
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=1005||stateno=1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421||stateno=230||stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410||stateno=430
trigger2 = movecontact&&statetype!=A
trigger3=stateno=1105
trigger3=statetype!=A
trigger3=time=[2,18]
trigger4=stateno=1555||stateno=1557
trigger4=statetype!=A
trigger4=time=[2,15]

;===============================================================================
;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1300
triggerall = var(59) = 0
triggerall = command = "弱パワーダンク"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno=1501||stateno=1400||stateno=1410||stateno=1401||stateno=1411||stateno=1420||stateno=1421
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1301
triggerall = var(59) = 0
triggerall = command = "強パワーダンク"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno=1501||stateno=1400||stateno=1410||stateno=1401||stateno=1411
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1502
triggerall = var(59) = 0
triggerall = command = "Gancho EX"
triggerall = power>=1000
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1500
triggerall = var(59) = 0
triggerall = command = "Gancho Corto"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno = 1006||stateno=1300||stateno=1301||stateno=1400||stateno=1410||stateno=1401||stateno=1411||stateno=1420||stateno=1421
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1501
triggerall = var(59) = 0
triggerall = command = "Gancho Largo"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno=1300||stateno=1301||stateno=1400||stateno=1410||stateno=1401||stateno=1411
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1402
triggerall = var(59) = 0
triggerall = command = "弱パワーチャージEX"
triggerall = statetype != A
triggerall = power>=1000
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1400
triggerall = var(59) = 0
triggerall = command = "弱パワーチャージ"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno=1300||stateno=1301||stateno=1501
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1401
triggerall = var(59) = 0
triggerall = command = "強パワーチャージ"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno=1300||stateno=1301||stateno=1501
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1202
triggerall = var(59) = 0
triggerall = command = "弱クラックシュートEX"
triggerall = statetype != A
triggerall = power>=1000
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1200
triggerall = var(59) = 0
triggerall = command = "弱クラックシュート"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno = 1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1201
triggerall = var(59) = 0
triggerall = command = "強クラックシュート"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno = 1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1401||stateno=1411
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1100
triggerall = var(59) = 0
triggerall = command = "弱バーンナックル"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno = 1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1420||stateno=1401||stateno=1411||stateno=1421
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1101
triggerall = var(59) = 0
triggerall = command = "強バーンナックル"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno = 1005||stateno = 1006||stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1401||stateno=1411
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0

;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1000
triggerall = var(59) = 0
triggerall = command = "ラウンドウェイブ"
triggerall = statetype != A
triggerall = power>=1000
triggerall = numproj = 0
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1005;1000
triggerall = var(59) = 0
triggerall = command = "弱パワーウェイブ"
triggerall = numproj = 0
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1401||stateno=1411
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 1006;1001
triggerall = var(59) = 0
triggerall = command = "強パワーウェイブ"
triggerall = numproj = 0
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=450||stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A
trigger3=stateno=210||stateno=230||stateno=240||stateno=440||stateno=290
trigger3=statetype!=A
trigger3=time>=10
trigger3=var(20)>0
trigger4 = stateno=1300||stateno=1301||stateno=1501||stateno=1400||stateno=1410||stateno=1401||stateno=1411||stateno=1420||stateno=1421
trigger4 = movecontact&&statetype!=A
trigger4 = var(20)>0

;===============================================================================
;===============================================================================
[State -1, Stand Light Punch]
type = ChangeState
value = 555
triggerall = command = "ふっ飛ばし"
triggerall = statetype != A
triggerall = var(59) = 0
trigger1 = stateno=[150,153]
trigger1 = statetype!=A
trigger1 = power>=1000
[State -1, Stand Light Punch]
type = ChangeState
value = 290
triggerall = command = "ふっ飛ばし"
triggerall = statetype != A
triggerall = var(59) = 0
trigger1 = ctrl
trigger2 = stateno=100
[State -1, Stand Light Punch]
type = ChangeState
value = 690
triggerall = command = "ふっ飛ばし"
trigger1 = statetype = A
trigger1 = ctrl
triggerall = var(59) = 0

;===============================================================================
;===============================================================================
[State -1, T S]
type = ChangeState
value = 700
triggerall = command = "recovery"
triggerall = command != "holdback"
triggerall = var(59) = 0
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=[150,153]
trigger2 = statetype!=A
trigger2 = power >= 1000
trigger3 = stateno = [200,499]
trigger3 = movecontact&&statetype!=A
trigger3 = power>=1000
trigger4=stateno=100
[State -1, T S]
type = ChangeState
value = 701
triggerall = command = "recovery"
triggerall = command = "holdback"
triggerall = var(59) = 0
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno=[150,153]
trigger2 = statetype!=A
trigger2 = power >= 1000
[State -1, UKEMI]
type = ChangeState
value = 5200
triggerall = command = "recovery"
triggerall = alive = 1
trigger1 = stateno = 5050
trigger1 = pos y > -20
trigger1 = vel y > 0 && vel y < 9

;===============================================================================
;===============================================================================
[State -1]
type = ChangeState
value = 11110
triggerall = statetype = S
triggerall = Power < 5000
triggerall = var(59) = 0
triggerall = ctrl = 1
trigger1 = command = "hold_a"
trigger1 = command = "hold_y"

;===============================================================================
;===============================================================================
[State -1, Jump Strong Kick]
type = ChangeState
value = 900
triggerall = command = "MAX"
triggerall = statetype != A
triggerall = power >= 1000
triggerall = var(59) = 0
trigger1 = var(20) = 0
trigger1 = ctrl
[State -1, Jump Strong Kick]
type = ChangeState
value = 901
triggerall = command = "MAX"
triggerall = statetype != A
triggerall = power >= 2000
triggerall = var(59) = 0
trigger1 = var(20) = 0
trigger1 = stateno = [200,499]
trigger1 = movecontact

;===============================================================================
;===============================================================================
[State -1, Run Fwd]
type = ChangeState
value = 100
trigger1 = command = "FF"
trigger1 = statetype = S
trigger1 = ctrl
triggerall = var(59) = 0
[State -1, Run Back]
type = ChangeState
value = 105
trigger1 = command = "BB"
trigger1 = statetype = S
trigger1 = ctrl
triggerall = var(59) = 0

;===============================================================================
;===============================================================================
[State -1, Kung Fu Throw]
type = ChangeState
value = 800
triggerall = command = "y"
triggerall = command = "holdfwd" || command = "holdback"
triggerall = statetype = S
triggerall = p2bodydist X <= 15
triggerall = ctrl
triggerall = stateno != [100,101]
trigger1 = (p2statetype = S) || (p2statetype = C)
trigger1 = p2movetype != H
[State -1, Kung Fu Throw]
type = ChangeState
value = 850
triggerall = command = "b"
triggerall = command = "holdfwd" || command = "holdback"
triggerall = statetype = S
triggerall = p2bodydist X <= 15
triggerall = ctrl
triggerall = stateno != [100,101]
trigger1 = (p2statetype = S) || (p2statetype = C)
trigger1 = p2movetype != H

;===============================================================================
;===============================================================================
[State -1, Strong Kung Fu Palm]
type = ChangeState
value = 450
triggerall = var(59) = 0
triggerall = command = "x"
triggerall = command = "holdfwd"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno = 200||stateno=205||stateno=215||stateno=235||stateno=245||stateno=400||stateno=410
trigger2 = movecontact&&statetype!=A

;===============================================================================
[State -1, Stand Light Punch]
type = ChangeState
value = 200
triggerall = var(59) = 0
triggerall = command = "x"
triggerall = command != "holddown"
triggerall = P2bodydist X >23
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100
[State -1, Stand Light Punch]
type = ChangeState
value = 205
triggerall = var(59) = 0
triggerall = command = "x"
triggerall = command != "holddown"
triggerall = P2bodydist X <= 23
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100

;===============================================================================
[State -1, Stand Strong Punch]
type = ChangeState
value = 210
triggerall = var(59) = 0
triggerall = command = "y"
triggerall = command != "holddown"
triggerall = P2bodydist X > 23
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100
[State -1, Stand Strong Punch]
type = ChangeState
value = 215
triggerall = var(59) = 0
triggerall = command = "y"
triggerall = command != "holddown"
triggerall = P2bodydist X <= 23
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100

;===============================================================================
[State -1, Stand Light Kick]
type = ChangeState
value = 230
triggerall = var(59) = 0
triggerall = command = "a"
triggerall = command != "holddown"
triggerall = P2bodydist X > 23
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100
[State -1, Stand Light Kick]
type = ChangeState
value = 235
triggerall = var(59) = 0
triggerall = command = "a"
triggerall = command != "holddown"
triggerall = P2bodydist X <= 23
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100

;===============================================================================
[State -1, Standing Strong Kick]
type = ChangeState
value = 240
triggerall = var(59) = 0
triggerall = command = "b"
triggerall = command != "holddown"
triggerall = P2bodydist X > 23
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100
[State -1, Standing Strong Kick]
type = ChangeState
value = 245
triggerall = var(59) = 0
triggerall = command = "b"
triggerall = command != "holddown"
triggerall = P2bodydist X <= 23
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100

;===============================================================================
;===============================================================================
[State -1, Taunt]
type = ChangeState
value = 195
triggerall = var(59) = 0
triggerall = command = "start"
trigger1 = statetype != A
trigger1 = ctrl

;===============================================================================
;===============================================================================
[State -1, Crouching Light Punch]
type = ChangeState
value = 400
triggerall = var(59) = 0
triggerall = command = "x"
triggerall = command = "holddown"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno = 400
trigger2 = (time > 9) || (movecontact && time > 5)
trigger3=stateno=430
trigger3=movecontact&&statetype!=A
trigger4=stateno=100

;===============================================================================
[State -1, Crouching Strong Punch]
type = ChangeState
value = 410
triggerall = var(59) = 0
triggerall = command = "y"
triggerall = command = "holddown"
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100

;===============================================================================
[State -1, Crouching Light Kick]
type = ChangeState
value = 430
triggerall = var(59) = 0
triggerall = command = "a"
triggerall = command = "holddown"
triggerall = statetype != A
trigger1 = ctrl
trigger2 = stateno = 430
trigger2 = (time > 9) || (movecontact && time > 5)
trigger3=stateno=100

;===============================================================================
[State -1, Crouching Strong Kick]
type = ChangeState
value = 440
triggerall = var(59) = 0
triggerall = command = "b"
triggerall = command = "holddown"
triggerall = statetype != A
trigger1 = ctrl
trigger2=stateno=100

;===============================================================================
[State -1, Jump Light Punch]
type = ChangeState
value = 600
triggerall = var(59) = 0
triggerall = command = "x"
triggerall = statetype = A
triggerall = stateno != 105
trigger1 = ctrl

;===============================================================================
[State -1, Jump Strong Punch]
type = ChangeState
value = 610
triggerall = var(59) = 0
triggerall = command = "y"
triggerall = statetype = A
triggerall = stateno != 105
trigger1 = ctrl

;===============================================================================
[State -1, Jump Light Kick]
type = ChangeState
value = 630
triggerall = var(59) = 0
triggerall = command = "a"
triggerall = statetype = A
triggerall = stateno != 105
trigger1 = ctrl

;===============================================================================
[State -1, Jump Strong Kick]
type = ChangeState
value = 640
triggerall = var(59) = 0
triggerall = command = "b"
triggerall = statetype = A
triggerall = stateno != 105
trigger1 = ctrl
