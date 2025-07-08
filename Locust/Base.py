from locust import HttpUser, task, between

class GoogleUser(HttpUser):
    wait_time = between(1, 3)  # Simulate users waiting 1-3 seconds between tasks

    @task
    def load_google_home(self):
        self.client.get("/", name="Load Google Home")
