class NoTopicException(Exception):
    def __init__(self):
        super().__init__("No Topic Provided")

