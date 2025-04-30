from django.db import models
from django.conf import settings

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    profile_picture = models.URLField(blank=True, null=True)
    title = models.CharField(max_length=255, blank=True)
    bio = models.TextField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    website = models.URLField(blank=True)
    location = models.CharField(max_length=255, blank=True)
    linkedin = models.URLField(blank=True)
    github = models.URLField(blank=True)
    twitter = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.user.email} Profile"

class Education(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='education')
    institution = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    field_of_study = models.CharField(max_length=255)
    start_year = models.CharField(max_length=10)
    end_year = models.CharField(max_length=10)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.institution} - {self.degree}"

class WorkExperience(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='work_experience')
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    start_date = models.CharField(max_length=20)
    end_date = models.CharField(max_length=20)
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.company} - {self.position}"

class Skill(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=255)
    level = models.CharField(max_length=50, blank=True)

    def __str__(self):
        return self.name

class License(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='licenses')
    name = models.CharField(max_length=255)
    issuing_organization = models.CharField(max_length=255)
    issue_date = models.CharField(max_length=20)
    expiration_date = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='projects')
    name = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.CharField(max_length=20)
    end_date = models.CharField(max_length=20, blank=True)
    url = models.URLField(blank=True)

    def __str__(self):
        return self.name

class Course(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='courses')
    name = models.CharField(max_length=255)
    provider = models.CharField(max_length=255)
    completion_date = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Publication(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='publications')
    title = models.CharField(max_length=255)
    publisher = models.CharField(max_length=255)
    publication_date = models.CharField(max_length=20)
    url = models.URLField(blank=True)

    def __str__(self):
        return self.title

class Patent(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='patents')
    title = models.CharField(max_length=255)
    patent_number = models.CharField(max_length=255)
    issue_date = models.CharField(max_length=20)

    def __str__(self):
        return self.title

class Honor(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='honors')
    title = models.CharField(max_length=255)
    issuer = models.CharField(max_length=255)
    date = models.CharField(max_length=20)

    def __str__(self):
        return self.title

class Language(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='languages')
    language = models.CharField(max_length=255)
    proficiency = models.CharField(max_length=255)

    def __str__(self):
        return self.language

class Organization(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE, related_name='organizations')
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    start_date = models.CharField(max_length=20)
    end_date = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.name
