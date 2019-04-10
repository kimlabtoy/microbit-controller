//% weight=0 color=#000000 icon="\uf11a"
namespace KimlabmicrobitC {
   
	
	
    /**
    * 不回傳值
    */
    //% blockId="LedTest" block="Smile"
    //% blockGap=2 weight=1
    export function LedTest(): void {
        basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
    }
	



    /**
    *右輪停止 
    */
	
	//% blockId="RWHEELS" block="Right_wheel_STOP"
    
    export function RWHEELS(): void {
	pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
        
    }
	
	/**
    * 右輪往前
    */
	
	//% blockId="RWHEELf" block="Right_wheel_FORWARD"
    
    export function RWHEELf(): void {
	pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
        
    }
	
	/**
    * 右輪往後
    */
	
	//% blockId="RWHEELb" block="Right_wheel_BACK"
   
    export function RWHEELb(): void {
	pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
        
    }
	
	
	/**
    * 左輪停止
    */
	
	//% blockId="LWHEELS" block="Left_wheel_STOP"
   
    export function LWHEELS(): void {
	pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
        
    }
	
	/**
    * 左輪往前
    */
	
	//% blockId="LWHEELf" block="Left_wheel_FORWARD"
    
    export function LWHEELf(): void {
	pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
        
    }
	
	/**
    * 左輪往後
    */
	
	//% blockId="LWHEELb" block="Left_wheel_BACK"
   
    export function LWHEELb(): void {
	pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
        
    }
	
	
	
	
	
	
	/**
    * 設定按鈕
    */
	
	//% blockId="Button_PullUp" block="Button_Res_Pullup"
    
    export function Button_PullUp(): void {
        pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
		pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
		pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
		pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
    }
	
	
	
  
     //% blockId=Left_Servo
     //% block="Left_Servo degrees %degree"
     //% degree.min=0 degree.max=180
	 
	export function Left_Servo( degree: number): void {
         pins.servoWritePin(AnalogPin.P11, degree)
        
    }
	
	//% blockId=Right_Servo
     //% block="Right_Servo degrees %degree"
     //% degree.min=0 degree.max=180
	 
	export function Right_Servo( degree: number): void {
         pins.servoWritePin(AnalogPin.P15, degree)
        
    }

    
}
