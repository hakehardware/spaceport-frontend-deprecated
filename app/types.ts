export interface Event {
    event_id: number
    event_name: string
    event_type: string
    event_level: string
    event_container_alias: string
    event_container_id: string
    event_container_type: string
    event_data: string
    event_datetime: string
    event_created_at: string
}

export interface Container {
    container_id: string
    container_type: string
    container_alias: string
    container_status: string
    container_image: string
    container_started_at: string
    container_is_cluster: number
    container_nats_url: string
    container_ip: string
    created_at: string
    updated_at: string
}

export interface Farmer {
    farmer_id: string
    container_id: string
    farmer_reward_address: string
    farmer_status: number
    created_at: string
    updated_at: string
}

export interface Farm {
    farm_id: string
    farmer_id: string
    farm_index: number
    farm_public_key: string
    farm_genesis_hash: string
    farm_size: string
    farm_directory: string
    farm_fastest_mode: string
    farm_initial_plot_complete: number
    farm_latest_sector: number
    farm_plot_progress: number
    created_at: string
    updated_at: string
}