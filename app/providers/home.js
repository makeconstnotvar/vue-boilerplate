import axios from 'axios';

export default {
  async topSeekerSpecs() {
    let response = await axios.get('https://jobrum.com/Job/GetTopProfAreas');
    return response.data.data.map(spec => {
      return {
        name: spec.name,
        count: spec.count,
        value: spec.value.id
      }
    })
  },
  async topEmployerSpecs() {
    let response = await axios.get('https://jobrum.com/ResumeApi/GetTopProfAreas');
    return response.data.data.map(spec => {
      return {
        name: spec.name,
        count: spec.count,
        value: spec.value.id
      }
    })

  },
  async statistic() {
    let response = await axios.get('https://jobrum.com/Misc/GetMainPageCounts')
    return response.data.data.map(stats => {
      return {
        employers: stats.employers,
        jobs: stats.openJobs,
        resumes: stats.resumes
      }
    })
  },
  async topSeekerQueries() {
    let response = await axios.get('https://jobrum.com/Misc/GetMainPageJobSeekerTop');
    return {
      queries: response.data.data.top.map(job => {
        return {
          id: job.id,
          name: job.name,
        }
      }),
      regions: response.data.data.topRegions.map(city => {
        return {
          id: city.id,
          name: city.name,
          code: city.nameEn,
          count: city.count
        }
      }),
    }
  },
  async topEmployerQueries() {
    let response = await axios.get('https://jobrum.com/Misc/GetMainPageEmployeeTop');
    return {
      queries: response.data.data.top.map(job => {
        return {
          id: job.id,
          name: job.name,
        }
      }),
      regions: response.data.data.topRegions.map(city => {
        return {
          id: city.id,
          name: city.name,
          code: city.nameEn,
          count: city.count
        }
      }),
    }
  }
}



