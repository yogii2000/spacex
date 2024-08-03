export  interface  Flight {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number | null;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        core_serial: string;
        flight: number;
        block: number;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        land_success: boolean | null;
        landing_intent: boolean;
        landing_type: string;
        landing_vehicle: string | null;
      }[];
    };
    second_stage: {
      block: number;
      payloads: {
        payload_id: string;
        norad_id: number[];
        cap_serial: string;
        reused: boolean;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: number | null;
        payload_mass_lbs: number | null;
        orbit: string;
        orbit_params: {
          reference_system: string;
          regime: string;
          longitude: number | null;
          semi_major_axis_km: number | null;
          eccentricity: number | null;
          periapsis_km: number | null;
          apoapsis_km: number | null;
          inclination_deg: number | null;
          period_min: number | null;
          lifespan_years: number | null;
          epoch: string | null;
          mean_motion: number | null;
          raan: number | null;
          arg_of_pericenter: number | null;
          mean_anomaly: number | null;
        };
        mass_returned_kg: number | null;
        mass_returned_lbs: number | null;
        flight_time_sec: number | null;
        cargo_manifest: string | null;
      }[];
    };
    fairings: null;
  };
  ships: string[];
  telemetry: {
    flight_club: string | null;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success: boolean | null;
  links: {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: string;
    reddit_launch: string | null;
    reddit_recovery: string | null;
    reddit_media: string | null;
    presskit: string | null;
    article_link: string | null;
    wikipedia: string | null;
    video_link: string | null;
    youtube_id: string | null;
    flickr_images: string[];
  };
  details: string;
  upcoming: boolean;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  timeline: any | null;
  crew: any | null;
  last_date_update: string;
  last_ll_launch_date: string | null;
  last_ll_update: string | null;
  last_wiki_launch_date: string;
  last_wiki_revision: string;
  last_wiki_update: string;
  launch_date_source: string;
}