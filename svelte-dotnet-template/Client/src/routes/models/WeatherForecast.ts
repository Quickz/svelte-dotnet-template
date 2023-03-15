export class WeatherForecast
{
    public date : Date = new Date();
    public temperatureC : number = 0;
    public summary : string = "";
    // public TemperatureF : number => ;
    public get temperatureF() : number
    {
        return 32 + Math.floor(this.temperatureC / 0.5556);
    }
}
