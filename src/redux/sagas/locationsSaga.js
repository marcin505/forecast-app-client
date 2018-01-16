//import { history } from 'components/router/History';
import { takeLatest, call, put } from 'redux-saga/effects';
import {
  CITY_SEARCH
} from 'redux/actions/actionTypes';
import * as LocationsActions from 'redux/actions/locationsActions';
import { citySearchRequest } from 'api/locationsAPI.js';
const orawka = [{"Version":1,"Key":"1395440","Type":"City","Rank":85,"LocalizedName":"Orawka","EnglishName":"Orawka","PrimaryPostalCode":"","Region":{"ID":"EUR","LocalizedName":"Europe","EnglishName":"Europe"},"Country":{"ID":"PL","LocalizedName":"Poland","EnglishName":"Poland"},"AdministrativeArea":{"ID":"MA","LocalizedName":"Lesser Poland","EnglishName":"Lesser Poland","Level":1,"LocalizedType":"Province","EnglishType":"Province","CountryID":"PL"},"TimeZone":{"Code":"CET","Name":"Europe/Warsaw","GmtOffset":1.0,"IsDaylightSaving":false,"NextOffsetChange":"2018-03-25T01:00:00Z"},"GeoPosition":{"Latitude":49.511,"Longitude":19.718,"Elevation":{"Metric":{"Value":708.0,"Unit":"m","UnitType":5},"Imperial":{"Value":2322.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"SupplementalAdminAreas":[{"Level":2,"LocalizedName":"Nowy Targ","EnglishName":"Nowy Targ"},{"Level":3,"LocalizedName":"Jabłonka","EnglishName":"Jabłonka"}],"DataSets":["Alerts"],"Details":{"Key":"1395440","StationCode":"LKLS","StationGmtOffset":1.0,"BandMap":"PL","Climo":"LKTT","LocalRadar":"","MediaRegion":null,"Metar":"EPKK","NXMetro":"","NXState":"","Population":998,"PrimaryWarningCountyCode":"","PrimaryWarningZoneCode":"","Satellite":"EURM","Synoptic":"11918","MarineStation":"","MarineStationGMTOffset":null,"VideoCode":"","PartnerID":null,"Sources":[{"DataType":"Alerts","Source":"Institute of Meteorology and Water Management - National Research Institute","SourceId":40},{"DataType":"CurrentConditions","Source":"AccuWeather","SourceId":1},{"DataType":"DailyForecast","Source":"AccuWeather","SourceId":1},{"DataType":"HourlyForecast","Source":"AccuWeather","SourceId":1}],"CanonicalPostalCode":"","CanonicalLocationKey":"1395440"}},{"Version":1,"Key":"2683416","Type":"City","Rank":85,"LocalizedName":"Orawka","EnglishName":"Orawka","PrimaryPostalCode":"","Region":{"ID":"EUR","LocalizedName":"Europe","EnglishName":"Europe"},"Country":{"ID":"PL","LocalizedName":"Poland","EnglishName":"Poland"},"AdministrativeArea":{"ID":"ZP","LocalizedName":"West Pomerania","EnglishName":"West Pomerania","Level":1,"LocalizedType":"Province","EnglishType":"Province","CountryID":"PL"},"TimeZone":{"Code":"CET","Name":"Europe/Warsaw","GmtOffset":1.0,"IsDaylightSaving":false,"NextOffsetChange":"2018-03-25T01:00:00Z"},"GeoPosition":{"Latitude":53.87,"Longitude":16.691,"Elevation":{"Metric":{"Value":142.0,"Unit":"m","UnitType":5},"Imperial":{"Value":465.0,"Unit":"ft","UnitType":0}}},"IsAlias":false,"ParentCity":{"Key":"1410063","LocalizedName":"Drężno","EnglishName":"Drężno"},"SupplementalAdminAreas":[{"Level":2,"LocalizedName":"Szczecinek","EnglishName":"Szczecinek"},{"Level":3,"LocalizedName":"Szczecinek","EnglishName":"Szczecinek"}],"DataSets":["Alerts"],"Details":{"Key":"2683416","StationCode":"12215","StationGmtOffset":1.0,"BandMap":"PL","Climo":"COHX","LocalRadar":"","MediaRegion":null,"Metar":"EPKO","NXMetro":"","NXState":"","Population":null,"PrimaryWarningCountyCode":"","PrimaryWarningZoneCode":"","Satellite":"EURM","Synoptic":"12215","MarineStation":"","MarineStationGMTOffset":null,"VideoCode":"","PartnerID":null,"Sources":[{"DataType":"Alerts","Source":"Institute of Meteorology and Water Management - National Research Institute","SourceId":40},{"DataType":"CurrentConditions","Source":"AccuWeather","SourceId":1},{"DataType":"DailyForecast","Source":"AccuWeather","SourceId":1},{"DataType":"HourlyForecast","Source":"AccuWeather","SourceId":1}],"CanonicalPostalCode":"","CanonicalLocationKey":"1410063"}}];
function* citySearchSaga({ payload: { query } }) {
  try {
    // if (query.length > 3) {
      // console.log(query);
    // const cities = yield call(citySearchRequest, query);
    // yield put(LocationsActions.citySearchSuccess({ cities }))

    yield put(LocationsActions.citySearchSuccess({ cities: orawka }))    
    // } else {
    //   yield put(LocationsActions.resetCities())
    // }
  } catch (error) {
    yield put(LocationsActions.citySearchFailed());
    yield put(LocationsActions.resetCities())
  }
}

export default function* watch() {
  yield* [
    takeLatest(CITY_SEARCH, citySearchSaga),
  ]
}
