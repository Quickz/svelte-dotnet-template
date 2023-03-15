<script lang="ts">
    import PageTitle from "../components/PageTitle.svelte";
    import { onMount } from "svelte";
    import { WeatherForecast } from "../models/WeatherForecast";

    let forecasts : Array<WeatherForecast>;

    onMount(async () =>
    {
        let response = await fetch("https://localhost:7216/weatherforecast");
        let json = await response.json();

        forecasts = [];
        
        for (let i = 0; i < json.length; i++)
        {
            let data = new WeatherForecast();
            data.date = new Date(json[i].date);
            data.summary = json[i].summary;
            data.temperatureC = json[i].temperatureC;

            forecasts.push(data);
        }
    });
</script>

<PageTitle>Weather forecast</PageTitle>

<h1>Weather forecast</h1>

<p>This component demonstrates fetching data from the server.</p>

{#if forecasts == null}
    <p><em>Loading...</em></p>
{:else}
    <table class="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Temp. (C)</th>
                <th>Temp. (F)</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            {#each forecasts as forecast}
                <tr>
                    <td>{forecast.date.toLocaleDateString()}</td>
                    <td>{forecast.temperatureC}</td>
                    <td>{forecast.temperatureF}</td>
                    <td>{forecast.summary}</td>
                </tr>
            {/each}
        </tbody>
    </table>
{/if}
