{{- define "backend.name" -}}
backend
{{- end }}

{{- define "backend.fullname" -}}
{{ include "backend.name" . }}
{{- end }}

{{- define "backend.labels" -}}
app: {{ include "backend.name" . }}
{{- end }}