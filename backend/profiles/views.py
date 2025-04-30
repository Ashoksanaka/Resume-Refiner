from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from .models import Profile, Education, WorkExperience, Skill, License, Project, Course, Publication, Patent, Honor, Language, Organization

User = get_user_model()

@login_required
def user_dashboard(request, username=None):
    if username:
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
    else:
        user = request.user

    try:
        profile = Profile.objects.get(user=user)
    except Profile.DoesNotExist:
        return JsonResponse({'error': 'Profile not found'}, status=404)

    education = list(profile.education.values())
    work_experience = list(profile.work_experience.values())
    skills = list(profile.skills.values())
    licenses = list(profile.licenses.values())
    projects = list(profile.projects.values())
    courses = list(profile.courses.values())
    publications = list(profile.publications.values())
    patents = list(profile.patents.values())
    honors = list(profile.honors.values())
    languages = list(profile.languages.values())
    organizations = list(profile.organizations.values())

    profile_data = {
        'profile_picture': profile.profile_picture,
        'title': profile.title,
        'bio': profile.bio,
        'phone': profile.phone,
        'website': profile.website,
        'location': profile.location,
        'linkedin': profile.linkedin,
        'github': profile.github,
        'twitter': profile.twitter,
        'education': education,
        'work_experience': work_experience,
        'skills': skills,
        'licenses': licenses,
        'projects': projects,
        'courses': courses,
        'publications': publications,
        'patents': patents,
        'honors': honors,
        'languages': languages,
        'organizations': organizations,
        'email': user.email,
        'name': user.get_full_name() or user.username,
    }

    return JsonResponse(profile_data)
