package com.skynet.studyon

import com.skynet.studyon.dto.AchievementRequest
import com.skynet.studyon.dto.AchievementResponse
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.web.client.RestTemplate

@SpringBootTest
class StudyonApplicationTests {

    @Test
    fun contextLoads() {
        val uri = "http://3.19.63.58:8087/api/v1/courses"
        val request = AchievementRequest(
                provider = "stepik",
                token = "zq1WOWLIHHfnZpZ9jknw9hOjI9Jes0",
                ids = listOf("57839", "4006"),
                columns = listOf("id", "title", "is_complete")
        )
        val response: AchievementResponse? = RestTemplate().postForObject(
                uri, request, AchievementResponse::class.java
        )

        println("1")
    }

}
