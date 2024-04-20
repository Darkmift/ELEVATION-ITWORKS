export const mockCityData = [
  {
    Version: 1,
    Key: '215854',
    Type: 'City',
    Rank: 31,
    LocalizedName: 'Tel Aviv',
    EnglishName: 'Tel Aviv',
    PrimaryPostalCode: '',
    Region: {
      ID: 'MEA',
      LocalizedName: 'Middle East',
      EnglishName: 'Middle East',
    },
    Country: {
      ID: 'IL',
      LocalizedName: 'Israel',
      EnglishName: 'Israel',
    },
    AdministrativeArea: {
      ID: 'TA',
      LocalizedName: 'Tel Aviv',
      EnglishName: 'Tel Aviv',
      Level: 1,
      LocalizedType: 'District',
      EnglishType: 'District',
      CountryID: 'IL',
    },
    TimeZone: {
      Code: 'IDT',
      Name: 'Asia/Jerusalem',
      GmtOffset: 3.0,
      IsDaylightSaving: true,
      NextOffsetChange: '2024-10-26T23:00:00Z',
    },
    GeoPosition: {
      Latitude: 32.045,
      Longitude: 34.77,
      Elevation: {
        Metric: {
          Value: 34.0,
          Unit: 'm',
          UnitType: 5,
        },
        Imperial: {
          Value: 111.0,
          Unit: 'ft',
          UnitType: 0,
        },
      },
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
      'AirQualityCurrentConditions',
      'AirQualityForecasts',
      'Alerts',
      'DailyPollenForecast',
      'ForecastConfidence',
      'FutureRadar',
      'MinuteCast',
    ],
    Details: {
      Key: '215854',
      StationCode: 'TVAV',
      StationGmtOffset: 2.0,
      BandMap: 'IS',
      Climo: 'LLSD',
      LocalRadar: '',
      MediaRegion: null,
      Metar: 'LLSD',
      NXMetro: '',
      NXState: '',
      Population: 371400,
      PrimaryWarningCountyCode: '',
      PrimaryWarningZoneCode: '',
      Satellite: 'MIDE',
      Synoptic: '40179',
      MarineStation: '',
      MarineStationGMTOffset: null,
      VideoCode: '',
      LocationStem: 'il/tel-aviv/215854',
      PartnerID: null,
      Sources: [
        {
          DataType: 'AirQualityCurrentConditions',
          Source: 'Plume Labs',
          SourceId: 63,
          PartnerSourceUrl: 'https://air.plumelabs.com/air-quality-in-tel-aviv-1ekd',
        },
        {
          DataType: 'AirQualityForecasts',
          Source: 'Plume Labs',
          SourceId: 63,
          PartnerSourceUrl: 'https://air.plumelabs.com/air-quality-in-tel-aviv-1ekd',
        },
        {
          DataType: 'Alerts',
          Source: 'Israel Meteorological Service',
          SourceId: 53,
        },
        {
          DataType: 'CurrentConditions',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'DailyForecast',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'DailyPollenForecast',
          Source: 'Copernicus Atmosphere Monitoring Service',
          SourceId: 78,
        },
        {
          DataType: 'ForecastConfidence',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'FutureRadar',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'Historical',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'HourlyForecast',
          Source: 'AccuWeather',
          SourceId: 1,
        },
        {
          DataType: 'MinuteCast',
          Source: 'AccuWeather',
          SourceId: 1,
        },
      ],
      CanonicalPostalCode: '',
      CanonicalLocationKey: '215854',
    },
  },
];

export const mockCityCurrentConditions = [
  {
    LocalObservationDateTime: '2024-04-20T20:08:00+03:00',
    EpochTime: 1713632880,
    WeatherText: 'Clear',
    WeatherIcon: 33,
    HasPrecipitation: false,
    PrecipitationType: null,
    IsDayTime: false,
    Temperature: {
      Metric: {
        Value: 23.0,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 73.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    RealFeelTemperature: {
      Metric: {
        Value: 21.3,
        Unit: 'C',
        UnitType: 17,
        Phrase: 'Pleasant',
      },
      Imperial: {
        Value: 70.0,
        Unit: 'F',
        UnitType: 18,
        Phrase: 'Pleasant',
      },
    },
    RealFeelTemperatureShade: {
      Metric: {
        Value: 21.3,
        Unit: 'C',
        UnitType: 17,
        Phrase: 'Pleasant',
      },
      Imperial: {
        Value: 70.0,
        Unit: 'F',
        UnitType: 18,
        Phrase: 'Pleasant',
      },
    },
    RelativeHumidity: 60,
    IndoorRelativeHumidity: 60,
    DewPoint: {
      Metric: {
        Value: 14.9,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 59.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Wind: {
      Direction: {
        Degrees: 338,
        Localized: 'NNW',
        English: 'NNW',
      },
      Speed: {
        Metric: {
          Value: 15.8,
          Unit: 'km/h',
          UnitType: 7,
        },
        Imperial: {
          Value: 9.8,
          Unit: 'mi/h',
          UnitType: 9,
        },
      },
    },
    WindGust: {
      Speed: {
        Metric: {
          Value: 26.0,
          Unit: 'km/h',
          UnitType: 7,
        },
        Imperial: {
          Value: 16.2,
          Unit: 'mi/h',
          UnitType: 9,
        },
      },
    },
    UVIndex: 0,
    UVIndexText: 'Low',
    Visibility: {
      Metric: {
        Value: 16.1,
        Unit: 'km',
        UnitType: 6,
      },
      Imperial: {
        Value: 10.0,
        Unit: 'mi',
        UnitType: 2,
      },
    },
    ObstructionsToVisibility: '',
    CloudCover: 1,
    Ceiling: {
      Metric: {
        Value: 9144.0,
        Unit: 'm',
        UnitType: 5,
      },
      Imperial: {
        Value: 30000.0,
        Unit: 'ft',
        UnitType: 0,
      },
    },
    Pressure: {
      Metric: {
        Value: 1011.5,
        Unit: 'mb',
        UnitType: 14,
      },
      Imperial: {
        Value: 29.87,
        Unit: 'inHg',
        UnitType: 12,
      },
    },
    PressureTendency: {
      LocalizedText: 'Steady',
      Code: 'S',
    },
    Past24HourTemperatureDeparture: {
      Metric: {
        Value: 0.5,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 1.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    ApparentTemperature: {
      Metric: {
        Value: 22.8,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 73.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WindChillTemperature: {
      Metric: {
        Value: 22.8,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 73.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WetBulbTemperature: {
      Metric: {
        Value: 18.0,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 64.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    WetBulbGlobeTemperature: {
      Metric: {
        Value: 19.8,
        Unit: 'C',
        UnitType: 17,
      },
      Imperial: {
        Value: 68.0,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Precip1hr: {
      Metric: {
        Value: 0.0,
        Unit: 'mm',
        UnitType: 3,
      },
      Imperial: {
        Value: 0.0,
        Unit: 'in',
        UnitType: 1,
      },
    },
    PrecipitationSummary: {
      Precipitation: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      PastHour: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past3Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past6Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past9Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past12Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past18Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
      Past24Hours: {
        Metric: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Imperial: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
      },
    },
    TemperatureSummary: {
      Past6HourRange: {
        Minimum: {
          Metric: {
            Value: 23.0,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 73.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 26.4,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 80.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Past12HourRange: {
        Minimum: {
          Metric: {
            Value: 16.9,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 62.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 26.4,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 80.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Past24HourRange: {
        Minimum: {
          Metric: {
            Value: 16.5,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 62.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Maximum: {
          Metric: {
            Value: 26.4,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 80.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
    },
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
  },
];

export const fiveDayForecastMetric = {
  Headline: {
    EffectiveDate: '2024-04-24T08:00:00+03:00',
    EffectiveEpochDate: 1713934800,
    Severity: 7,
    Text: 'Becoming hotter Wednesday',
    Category: 'warmer',
    EndDate: '2024-04-24T20:00:00+03:00',
    EndEpochDate: 1713978000,
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2024-04-20T07:00:00+03:00',
      EpochDate: 1713585600,
      Sun: {
        Rise: '2024-04-20T06:06:00+03:00',
        EpochRise: 1713582360,
        Set: '2024-04-20T19:14:00+03:00',
        EpochSet: 1713629640,
      },
      Moon: {
        Rise: '2024-04-20T16:11:00+03:00',
        EpochRise: 1713618660,
        Set: '2024-04-21T04:46:00+03:00',
        EpochSet: 1713663960,
        Phase: 'WaxingGibbous',
        Age: 12,
      },
      Temperature: {
        Minimum: {
          Value: 18.6,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 26.4,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 17.8,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 29.6,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Very Warm',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 17.8,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 24.7,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
      },
      HoursOfSun: 6.9,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 5.0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 9,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
        ShortPhrase: 'Clearing',
        LongPhrase: 'Clearing',
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 11.1,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 289,
            Localized: 'WNW',
            English: 'WNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 29.6,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 327,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 47,
        Evapotranspiration: {
          Value: 3.8,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 5428.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 46,
          Maximum: 77,
          Average: 56,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 14.7,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 18.7,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 17.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 16.3,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 23.0,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 21.1,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Partly cloudy and warm',
        LongPhrase: 'Clear to partly cloudy and warm',
        PrecipitationProbability: 2,
        ThunderstormProbability: 0,
        RainProbability: 2,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 329,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 18.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 4,
            Localized: 'N',
            English: 'N',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 36,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 97.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 60,
          Maximum: 77,
          Average: 71,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 16.8,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 18.1,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 17.4,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 19.0,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 21.3,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 19.9,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
    },
    {
      Date: '2024-04-21T07:00:00+03:00',
      EpochDate: 1713672000,
      Sun: {
        Rise: '2024-04-21T06:05:00+03:00',
        EpochRise: 1713668700,
        Set: '2024-04-21T19:15:00+03:00',
        EpochSet: 1713716100,
      },
      Moon: {
        Rise: '2024-04-21T17:06:00+03:00',
        EpochRise: 1713708360,
        Set: '2024-04-22T05:10:00+03:00',
        EpochSet: 1713751800,
        Phase: 'WaxingGibbous',
        Age: 13,
      },
      Temperature: {
        Minimum: {
          Value: 15.8,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 23.2,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 16.0,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cool',
        },
        Maximum: {
          Value: 26.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: '',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 16.0,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Cool',
        },
        Maximum: {
          Value: 21.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
      },
      HoursOfSun: 11.4,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 2.0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 10,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly sunny',
        LongPhrase: 'Mostly sunny',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 14.8,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 318,
            Localized: 'NW',
            English: 'NW',
          },
        },
        WindGust: {
          Speed: {
            Value: 29.6,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 320,
            Localized: 'NW',
            English: 'NW',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 12,
        Evapotranspiration: {
          Value: 4.6,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 8228.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 52,
          Maximum: 77,
          Average: 59,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 16.4,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 17.2,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 16.7,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 18.8,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 20.5,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 19.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Partly cloudy',
        LongPhrase: 'Partly cloudy',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 37,
            Localized: 'NE',
            English: 'NE',
          },
        },
        WindGust: {
          Speed: {
            Value: 20.4,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 357,
            Localized: 'N',
            English: 'N',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 36,
        Evapotranspiration: {
          Value: 0.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 119.9,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 65,
          Maximum: 86,
          Average: 75,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 14.6,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 16.7,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 15.7,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 16.6,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 19.4,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 18.2,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
    },
    {
      Date: '2024-04-22T07:00:00+03:00',
      EpochDate: 1713758400,
      Sun: {
        Rise: '2024-04-22T06:04:00+03:00',
        EpochRise: 1713755040,
        Set: '2024-04-22T19:15:00+03:00',
        EpochSet: 1713802500,
      },
      Moon: {
        Rise: '2024-04-22T18:00:00+03:00',
        EpochRise: 1713798000,
        Set: '2024-04-23T05:35:00+03:00',
        EpochSet: 1713839700,
        Phase: 'WaxingGibbous',
        Age: 14,
      },
      Temperature: {
        Minimum: {
          Value: 18.1,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 24.5,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 17.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 27.3,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Very Warm',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 17.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 22.6,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
      },
      HoursOfSun: 12.5,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 3.0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 10,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Sunny',
        LongPhrase: 'Sunny',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13.0,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 333,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 35.2,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 337,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 5,
        Evapotranspiration: {
          Value: 4.8,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 8331.7,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 45,
          Maximum: 78,
          Average: 54,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 15.3,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 16.8,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 16.4,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 17.7,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 21.1,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 20.0,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
        ShortPhrase: 'Clear and mild',
        LongPhrase: 'Clear and mild',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.3,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 24,
            Localized: 'NNE',
            English: 'NNE',
          },
        },
        WindGust: {
          Speed: {
            Value: 25.9,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 12,
            Localized: 'NNE',
            English: 'NNE',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 0,
        Evapotranspiration: {
          Value: 0.5,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 124.7,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 56,
          Maximum: 67,
          Average: 64,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 14.6,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 16.7,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 15.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 17.5,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 19.9,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 18.8,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
    },
    {
      Date: '2024-04-23T07:00:00+03:00',
      EpochDate: 1713844800,
      Sun: {
        Rise: '2024-04-23T06:03:00+03:00',
        EpochRise: 1713841380,
        Set: '2024-04-23T19:16:00+03:00',
        EpochSet: 1713888960,
      },
      Moon: {
        Rise: '2024-04-23T18:56:00+03:00',
        EpochRise: 1713887760,
        Set: '2024-04-24T06:02:00+03:00',
        EpochSet: 1713927720,
        Phase: 'WaxingGibbous',
        Age: 15,
      },
      Temperature: {
        Minimum: {
          Value: 20.4,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 27.9,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 19.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 31.9,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Hot',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 19.4,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 26.0,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
      },
      HoursOfSun: 11.1,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 6.0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 10,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 6,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly cloudy',
        LongPhrase: 'Mostly cloudy',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 13.0,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 347,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 31.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 346,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 25,
        Evapotranspiration: {
          Value: 5.3,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 7813.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 38,
          Maximum: 61,
          Average: 47,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 15.2,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 19.2,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 17.7,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 18.4,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 23.9,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 22.0,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Partly cloudy and warm',
        LongPhrase: 'Partly cloudy and warm',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 7.4,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 60,
            Localized: 'ENE',
            English: 'ENE',
          },
        },
        WindGust: {
          Speed: {
            Value: 22.2,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 11,
            Localized: 'N',
            English: 'N',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 44,
        Evapotranspiration: {
          Value: 0.5,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 128.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 43,
          Maximum: 56,
          Average: 50,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 13.7,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 19.2,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 16.1,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 18.1,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 22.0,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 19.9,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
    },
    {
      Date: '2024-04-24T07:00:00+03:00',
      EpochDate: 1713931200,
      Sun: {
        Rise: '2024-04-24T06:02:00+03:00',
        EpochRise: 1713927720,
        Set: '2024-04-24T19:17:00+03:00',
        EpochSet: 1713975420,
      },
      Moon: {
        Rise: '2024-04-24T19:55:00+03:00',
        EpochRise: 1713977700,
        Set: '2024-04-25T06:33:00+03:00',
        EpochSet: 1714015980,
        Phase: 'Full',
        Age: 16,
      },
      Temperature: {
        Minimum: {
          Value: 23.3,
          Unit: 'C',
          UnitType: 17,
        },
        Maximum: {
          Value: 34.5,
          Unit: 'C',
          UnitType: 17,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 23.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 37.1,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Hot',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 23.2,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 32.9,
          Unit: 'C',
          UnitType: 17,
          Phrase: 'Hot',
        },
      },
      HoursOfSun: 6.9,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'C',
          UnitType: 17,
        },
        Cooling: {
          Value: 11.0,
          Unit: 'C',
          UnitType: 17,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 10,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 6,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly cloudy and hot',
        LongPhrase: 'Mostly cloudy and hot',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 11.1,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 53,
            Localized: 'NE',
            English: 'NE',
          },
        },
        WindGust: {
          Speed: {
            Value: 31.5,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 352,
            Localized: 'N',
            English: 'N',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 52,
        Evapotranspiration: {
          Value: 5.1,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 6033.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 26,
          Maximum: 38,
          Average: 29,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 15.0,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 20.2,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 18.6,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 20.3,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 26.8,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 25.0,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Partly cloudy and very warm',
        LongPhrase: 'Partly cloudy and very warm',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 7.4,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 128,
            Localized: 'SE',
            English: 'SE',
          },
        },
        WindGust: {
          Speed: {
            Value: 24.1,
            Unit: 'km/h',
            UnitType: 7,
          },
          Direction: {
            Degrees: 16,
            Localized: 'NNE',
            English: 'NNE',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Rain: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        Snow: {
          Value: 0.0,
          Unit: 'cm',
          UnitType: 4,
        },
        Ice: {
          Value: 0.0,
          Unit: 'mm',
          UnitType: 3,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 97,
        Evapotranspiration: {
          Value: 1.0,
          Unit: 'mm',
          UnitType: 3,
        },
        SolarIrradiance: {
          Value: 30.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 34,
          Maximum: 43,
          Average: 38,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 15.6,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 19.5,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 17.4,
            Unit: 'C',
            UnitType: 17,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 19.9,
            Unit: 'C',
            UnitType: 17,
          },
          Maximum: {
            Value: 24.2,
            Unit: 'C',
            UnitType: 17,
          },
          Average: {
            Value: 21.6,
            Unit: 'C',
            UnitType: 17,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink:
        'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
    },
  ],
};

export const fiveDayForecastImperial = {
  Headline: {
    EffectiveDate: '2024-04-24T08:00:00+03:00',
    EffectiveEpochDate: 1713934800,
    Severity: 7,
    Text: 'Becoming hotter Wednesday',
    Category: 'warmer',
    EndDate: '2024-04-24T20:00:00+03:00',
    EndEpochDate: 1713978000,
    MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
    Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
  },
  DailyForecasts: [
    {
      Date: '2024-04-20T07:00:00+03:00',
      EpochDate: 1713585600,
      Sun: {
        Rise: '2024-04-20T06:06:00+03:00',
        EpochRise: 1713582360,
        Set: '2024-04-20T19:14:00+03:00',
        EpochSet: 1713629640,
      },
      Moon: {
        Rise: '2024-04-20T16:11:00+03:00',
        EpochRise: 1713618660,
        Set: '2024-04-21T04:46:00+03:00',
        EpochSet: 1713663960,
        Phase: 'WaxingGibbous',
        Age: 12,
      },
      Temperature: {
        Minimum: {
          Value: 66.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 80.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 64.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 85.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Very Warm',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 64.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 77.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
      },
      HoursOfSun: 6.9,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'F',
          UnitType: 18,
        },
        Cooling: {
          Value: 8.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 9,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 4,
        IconPhrase: 'Intermittent clouds',
        HasPrecipitation: false,
        ShortPhrase: 'Clearing',
        LongPhrase: 'Clearing',
        PrecipitationProbability: 1,
        ThunderstormProbability: 0,
        RainProbability: 1,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 6.9,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 289,
            Localized: 'WNW',
            English: 'WNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 18.4,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 327,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 47,
        Evapotranspiration: {
          Value: 0.15,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 5428.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 46,
          Maximum: 77,
          Average: 56,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 59.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 66.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 64.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 61.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 73.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 70.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Partly cloudy and warm',
        LongPhrase: 'Clear to partly cloudy and warm',
        PrecipitationProbability: 2,
        ThunderstormProbability: 0,
        RainProbability: 2,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.8,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 329,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 11.5,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 4,
            Localized: 'N',
            English: 'N',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 36,
        Evapotranspiration: {
          Value: 0.01,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 97.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 60,
          Maximum: 77,
          Average: 71,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 62.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 65.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 63.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 66.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 70.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
    },
    {
      Date: '2024-04-21T07:00:00+03:00',
      EpochDate: 1713672000,
      Sun: {
        Rise: '2024-04-21T06:05:00+03:00',
        EpochRise: 1713668700,
        Set: '2024-04-21T19:15:00+03:00',
        EpochSet: 1713716100,
      },
      Moon: {
        Rise: '2024-04-21T17:06:00+03:00',
        EpochRise: 1713708360,
        Set: '2024-04-22T05:10:00+03:00',
        EpochSet: 1713751800,
        Phase: 'WaxingGibbous',
        Age: 13,
      },
      Temperature: {
        Minimum: {
          Value: 60.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 74.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 61.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Cool',
        },
        Maximum: {
          Value: 80.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 61.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Cool',
        },
        Maximum: {
          Value: 71.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
      },
      HoursOfSun: 11.4,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'F',
          UnitType: 18,
        },
        Cooling: {
          Value: 2.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 10,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 2,
        IconPhrase: 'Mostly sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly sunny',
        LongPhrase: 'Mostly sunny',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 9.2,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 318,
            Localized: 'NW',
            English: 'NW',
          },
        },
        WindGust: {
          Speed: {
            Value: 18.4,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 320,
            Localized: 'NW',
            English: 'NW',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 12,
        Evapotranspiration: {
          Value: 0.18,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 8228.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 52,
          Maximum: 77,
          Average: 59,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 61.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 63.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 62.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 66.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 69.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Partly cloudy',
        LongPhrase: 'Partly cloudy',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.8,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 37,
            Localized: 'NE',
            English: 'NE',
          },
        },
        WindGust: {
          Speed: {
            Value: 12.7,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 357,
            Localized: 'N',
            English: 'N',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 36,
        Evapotranspiration: {
          Value: 0.01,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 119.9,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 65,
          Maximum: 86,
          Average: 75,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 58.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 62.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 60.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 62.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 67.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 65.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
    },
    {
      Date: '2024-04-22T07:00:00+03:00',
      EpochDate: 1713758400,
      Sun: {
        Rise: '2024-04-22T06:04:00+03:00',
        EpochRise: 1713755040,
        Set: '2024-04-22T19:15:00+03:00',
        EpochSet: 1713802500,
      },
      Moon: {
        Rise: '2024-04-22T18:00:00+03:00',
        EpochRise: 1713798000,
        Set: '2024-04-23T05:35:00+03:00',
        EpochSet: 1713839700,
        Phase: 'WaxingGibbous',
        Age: 14,
      },
      Temperature: {
        Minimum: {
          Value: 65.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 76.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 63.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 81.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 63.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 73.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
      },
      HoursOfSun: 12.5,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'F',
          UnitType: 18,
        },
        Cooling: {
          Value: 5.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 10,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 1,
        IconPhrase: 'Sunny',
        HasPrecipitation: false,
        ShortPhrase: 'Sunny',
        LongPhrase: 'Sunny',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 8.1,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 333,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 21.9,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 337,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 5,
        Evapotranspiration: {
          Value: 0.19,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 8331.7,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 45,
          Maximum: 78,
          Average: 54,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 60.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 62.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 61.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 64.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 70.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Night: {
        Icon: 33,
        IconPhrase: 'Clear',
        HasPrecipitation: false,
        ShortPhrase: 'Clear and mild',
        LongPhrase: 'Clear and mild',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 5.8,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 24,
            Localized: 'NNE',
            English: 'NNE',
          },
        },
        WindGust: {
          Speed: {
            Value: 16.1,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 12,
            Localized: 'NNE',
            English: 'NNE',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 0,
        Evapotranspiration: {
          Value: 0.02,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 124.7,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 56,
          Maximum: 67,
          Average: 64,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 58.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 62.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 60.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 63.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 66.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
    },
    {
      Date: '2024-04-23T07:00:00+03:00',
      EpochDate: 1713844800,
      Sun: {
        Rise: '2024-04-23T06:03:00+03:00',
        EpochRise: 1713841380,
        Set: '2024-04-23T19:16:00+03:00',
        EpochSet: 1713888960,
      },
      Moon: {
        Rise: '2024-04-23T18:56:00+03:00',
        EpochRise: 1713887760,
        Set: '2024-04-24T06:02:00+03:00',
        EpochSet: 1713927720,
        Phase: 'WaxingGibbous',
        Age: 15,
      },
      Temperature: {
        Minimum: {
          Value: 69.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 82.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 67.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 89.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Very Warm',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 67.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 79.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
      },
      HoursOfSun: 11.1,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'F',
          UnitType: 18,
        },
        Cooling: {
          Value: 10.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 10,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 6,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly cloudy',
        LongPhrase: 'Mostly cloudy',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 8.1,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 347,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        WindGust: {
          Speed: {
            Value: 19.6,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 346,
            Localized: 'NNW',
            English: 'NNW',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 25,
        Evapotranspiration: {
          Value: 0.21,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 7813.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 38,
          Maximum: 61,
          Average: 47,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 59.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 67.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 64.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 65.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 75.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 72.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Partly cloudy and warm',
        LongPhrase: 'Partly cloudy and warm',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 4.6,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 60,
            Localized: 'ENE',
            English: 'ENE',
          },
        },
        WindGust: {
          Speed: {
            Value: 13.8,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 11,
            Localized: 'N',
            English: 'N',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 44,
        Evapotranspiration: {
          Value: 0.02,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 128.0,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 43,
          Maximum: 56,
          Average: 50,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 57.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 67.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 61.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 65.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 72.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
    },
    {
      Date: '2024-04-24T07:00:00+03:00',
      EpochDate: 1713931200,
      Sun: {
        Rise: '2024-04-24T06:02:00+03:00',
        EpochRise: 1713927720,
        Set: '2024-04-24T19:17:00+03:00',
        EpochSet: 1713975420,
      },
      Moon: {
        Rise: '2024-04-24T19:55:00+03:00',
        EpochRise: 1713977700,
        Set: '2024-04-25T06:33:00+03:00',
        EpochSet: 1714015980,
        Phase: 'Full',
        Age: 16,
      },
      Temperature: {
        Minimum: {
          Value: 74.0,
          Unit: 'F',
          UnitType: 18,
        },
        Maximum: {
          Value: 94.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      RealFeelTemperature: {
        Minimum: {
          Value: 74.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 99.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Hot',
        },
      },
      RealFeelTemperatureShade: {
        Minimum: {
          Value: 74.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Pleasant',
        },
        Maximum: {
          Value: 91.0,
          Unit: 'F',
          UnitType: 18,
          Phrase: 'Hot',
        },
      },
      HoursOfSun: 6.9,
      DegreeDaySummary: {
        Heating: {
          Value: 0.0,
          Unit: 'F',
          UnitType: 18,
        },
        Cooling: {
          Value: 19.0,
          Unit: 'F',
          UnitType: 18,
        },
      },
      AirAndPollen: [
        {
          Name: 'AirQuality',
          Value: 0,
          Category: 'Good',
          CategoryValue: 1,
          Type: 'Ozone',
        },
        {
          Name: 'Grass',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Mold',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Ragweed',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'Tree',
          Value: 0,
          Category: 'Low',
          CategoryValue: 1,
        },
        {
          Name: 'UVIndex',
          Value: 10,
          Category: 'Very High',
          CategoryValue: 4,
        },
      ],
      Day: {
        Icon: 6,
        IconPhrase: 'Mostly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Mostly cloudy and hot',
        LongPhrase: 'Mostly cloudy and hot',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 6.9,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 53,
            Localized: 'NE',
            English: 'NE',
          },
        },
        WindGust: {
          Speed: {
            Value: 19.6,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 352,
            Localized: 'N',
            English: 'N',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 52,
        Evapotranspiration: {
          Value: 0.2,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 6033.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 26,
          Maximum: 38,
          Average: 29,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 59.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 66.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 69.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 80.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 77.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Night: {
        Icon: 35,
        IconPhrase: 'Partly cloudy',
        HasPrecipitation: false,
        ShortPhrase: 'Partly cloudy and very warm',
        LongPhrase: 'Partly cloudy and very warm',
        PrecipitationProbability: 0,
        ThunderstormProbability: 0,
        RainProbability: 0,
        SnowProbability: 0,
        IceProbability: 0,
        Wind: {
          Speed: {
            Value: 4.6,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 128,
            Localized: 'SE',
            English: 'SE',
          },
        },
        WindGust: {
          Speed: {
            Value: 15.0,
            Unit: 'mi/h',
            UnitType: 9,
          },
          Direction: {
            Degrees: 16,
            Localized: 'NNE',
            English: 'NNE',
          },
        },
        TotalLiquid: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Rain: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Snow: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        Ice: {
          Value: 0.0,
          Unit: 'in',
          UnitType: 1,
        },
        HoursOfPrecipitation: 0.0,
        HoursOfRain: 0.0,
        HoursOfSnow: 0.0,
        HoursOfIce: 0.0,
        CloudCover: 97,
        Evapotranspiration: {
          Value: 0.04,
          Unit: 'in',
          UnitType: 1,
        },
        SolarIrradiance: {
          Value: 30.2,
          Unit: 'W/m²',
          UnitType: 33,
        },
        RelativeHumidity: {
          Minimum: 34,
          Maximum: 43,
          Average: 38,
        },
        WetBulbTemperature: {
          Minimum: {
            Value: 60.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 67.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 63.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Minimum: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
          Maximum: {
            Value: 76.0,
            Unit: 'F',
            UnitType: 18,
          },
          Average: {
            Value: 71.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
      },
      Sources: ['AccuWeather'],
      MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
    },
  ],
};
