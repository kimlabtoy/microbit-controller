//% weight=0 color=#000000 icon="\uf11a" block="KimlabRobot"
namespace KimlabRobot {
   
	
	/*回傳值
    //% blockId="areaOfRectangle" block="area of rectangle length %length|width %width"
    //% blockGap=2 weight=0 blockExternalInputs=true
    export function areaOfRectangle(length: number, width:number): number {
        return length*width
    }
	*/
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
